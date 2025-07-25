// FFmpeg processing
function applyFFmpegEffect(formula) {
  FFmpeg.run('-i', 'input.mp4', '-vf', formula, 'output.mp4');
}

// Real-time preview
function previewFilter(formula) {
  const preview = document.getElementById('editor');
  preview.style.filter = convertToCSS(formula);
}
