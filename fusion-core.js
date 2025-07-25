// Smart filter combinations
const fusionRecipes = {
  cinematic_glow: {
    formula: 'curves=preset=strong_contrast, glow=10:20',
    preview: 'assets/thumbs/cine-glow.jpg'
  },
  cyberpunk: {
    formula: 'hue=30, colorchannelmixer=.3:.4:.3:0:.3:.4:.3:0:.3:.4:.3',
    preview: 'assets/thumbs/cyber.jpg'
  }
};

function applyFusion(filter1, filter2) {
  const recipeKey = `${filter1}_${filter2}`;
  if (fusionRecipes[recipeKey]) {
    applyFFmpegEffect(fusionRecipes[recipeKey].formula);
  } else {
    // Fallback to AI blend
    blendWithAI(filter1, filter2);
  }
}
