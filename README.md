# 🌍 ELEVATE.ORG — Youth Nonprofit Website 
(https://elevateglobal.org/)
A modern, responsive landing site for **ELEVATE**, a youth-led nonprofit empowering teens to make informed choices about vaping.
Built with **React + Vite + TailwindCSS + shadcn/ui + Framer Motion**.

## 🚀 Features
- Clean, mobile-friendly UI
- Mission, Programs, Impact, and Contact sections
- Newsletter signup (client-side form)
- Simple static deployment setup

## ⚙️ Installation
```bash
git clone https://github.com/<your-username>/elevate-org.git
cd elevate-org
npm install
npm run dev
npm run build
```
## 🌐 Deployment
Supports **Netlify**, **GitHub Pages**, and **Vercel**.


## Form submissions (Netlify)

Contact messages, newsletter signup emails, gear donation details, and volunteer
inquiries use Netlify Forms. Both contact forms share `src/components/ContactForm.jsx`.
Newsletter signup saves email addresses only; automated newsletter delivery is not configured.

The static declarations in `public/netlify-forms.html` must match the field names
in the React forms and `src/lib/netlifyForms.js`. Vite copies this file into `dist/`.
The submission helper posts URL-encoded data to `/netlify-forms.html` and rejects
HTTP/network failures and responses that simply return the static website.

Before verifying the live forms:

1. In the site's Netlify dashboard, open **Forms** and enable form detection if disabled.
2. Deploy a fresh build (`npm run build`, publish directory `dist`). Netlify must
   process the new HTML definitions after detection is enabled.
3. Confirm Netlify lists `contact`, `newsletter`, `gear-donation`, and `volunteer`.
4. Submit clearly labeled test data on the deployed site and verify every field
   appears in Netlify Forms, including the contact category. Check the spam inbox
   if a test submission does not appear in the verified submissions list.
5. If email alerts are desired, configure **Forms > Submission notifications**
   with the intended recipient in Netlify. No notification address is configured by this code.

Ordinary Vite localhost previews do not provide Netlify Forms processing. They show
an explicit preview message on submission and retain entered values; no data is sent.
An HTTP success response cannot by itself verify dashboard storage or email delivery,
so the post-deployment check above is required.

Run `npm test` for submission and form-definition checks. Tests use simulated
responses and never submit data to a live service.

References: [Netlify Forms setup](https://docs.netlify.com/manage/forms/setup/) and
[submission notifications](https://docs.netlify.com/manage/forms/notifications/).


## Convert new website images to WebP

Run the reusable macOS script from the repository directory:

```bash
./optimize-elevate-images.sh
```

With no arguments, it reads JPG/JPEG/PNG files from
`~/Desktop/ELEVATE-New-Photos` and writes WebP images to `~/Desktop/ELEVATE-WebP`.
Create the input folder and place your new photos there first. The script needs
`cwebp` (`brew install webp` if missing); macOS provides `sips`.

To use your own folders, pass the input and output folders in that order. Quote
paths that contain spaces:

```bash
./optimize-elevate-images.sh "/path/to/New Photos" "./src/assets/events/optimized"
```

The default quality is 80. Large images are resized to a maximum of 1920 pixels
on the longest side, preserving proportions. Smaller images are not enlarged.
PNG transparency is retained. Customize these settings with:

```bash
./optimize-elevate-images.sh "./new-photos" "./webp" --quality 85 --max-size 1600
```

For graphics or flyers where exact pixels matter (including QR codes), use
lossless conversion without resizing:

```bash
./optimize-elevate-images.sh "./graphics" "./webp" --lossless --max-size 0
```

The script searches nested input folders and writes all converted images into
the selected output folder. Filenames are normalized to lowercase with hyphens.
Colliding names receive a stable suffix. Originals and existing outputs are
never overwritten; reruns skip existing WebP files. To change conversion settings,
use a new output folder. Failures are reported individually and produce a nonzero
exit code after the rest of the batch finishes. Videos are not converted.

After conversion, add the generated files to the appropriate asset folder and
update the relevant React image imports. The script does not edit pages or deploy
the website. WebP sizes vary with the image; lossless files can be larger.
Use `./optimize-elevate-images.sh --help` to view all options.


## Optimize local website videos

Use the companion video script for MOV, MP4, M4V, and WebM files:

```bash
./optimize-elevate-videos.sh
```

The defaults are `~/Desktop/ELEVATE-New-Videos` for input and
`~/Desktop/ELEVATE-Web-Videos` for output. FFmpeg and ffprobe are required
(`brew install ffmpeg` if missing). Output is MP4 with H.264 video, AAC audio,
and fast-start metadata so playback can begin before the entire file downloads.
The default CRF is 26, the maximum dimension is 1920 pixels, and audio and frame
rate are preserved. Originals and existing output files are kept.

To use custom folders and smaller output:

```bash
./optimize-elevate-videos.sh "./new-videos" "./src/assets/events/optimized-videos" --crf 28 --max-size 1280 --fps 30
```

Lower CRF values give higher visual quality and larger files; higher values give
smaller files and lower quality. `--fps` caps frame rate without raising it for
slower source footage. Use `--preset slow` for slower encoding with better
compression, or `--preset veryfast` for faster encoding.

For silent background videos:

```bash
./optimize-elevate-videos.sh "./hero-videos" "./mp4" --mute
```

The script processes nested folders, handles duplicate normalized filenames,
skips existing outputs, validates each result, and reports per-file failures.
It excludes the selected output folder from its input scan. Use a new output
folder to re-encode with different settings. Output size depends on the source;
re-encoding an already compressed clip can increase its size.

HDR phone footage (HLG/PQ) requires FFmpeg's `zscale` and `tonemap` filters to
convert to SDR H.264 for the website. The script detects this and reports a
failure if those filters are absent. The current local FFmpeg build lacks
`zscale`; for HDR footage, first export an SDR copy or use an FFmpeg build with
libzimg/zscale support. HDR tone mapping is not verified on this local build.

Copy the finished MP4 files into the appropriate assets directory and update
React imports when ready. This script handles local files; videos already hosted
on YouTube continue to use their existing embeds. Use
`./optimize-elevate-videos.sh --help` for all options.
