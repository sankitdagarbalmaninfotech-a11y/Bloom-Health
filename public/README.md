# Public Assets Directory

This directory contains all the static assets for the BloomHealth application.

## Directory Structure

```
public/
├── images/          # For all image assets
│   ├── hero/       # Hero section images
│   ├── services/   # Service-related images
│   ├── about/      # About section images
│   └── contact/    # Contact section images
├── icons/          # For icon assets
└── fonts/          # For custom fonts (if any)
```

## Usage

- Place all static images in the appropriate subdirectory under `images/`
- Use relative paths from the public directory when referencing these assets in your code
- Example: `/images/hero/hero-1.jpg`

## Best Practices

1. Use descriptive file names
2. Optimize images before adding them
3. Use appropriate image formats:
   - JPG for photographs
   - PNG for images requiring transparency
   - WebP for better compression (with fallbacks)
4. Keep file sizes reasonable for web use 