function printNTime(n) {
  if (n >= 100 || n <= 0) return;
  for (let i = 0; i < n; i++) {
    console.log("man khoshghlab hastam");
  }
}

// return n time "man khoshghlab hastam"
function printNTime(n) {
  try {
    const start = performance.now();
    if (n >= 100 || n <= 0) return;
    for (let i = 0; i < n; i++) {
      console.log("man khoshghlab hastam");
    }
  } finally {
    const duration = performance.now() - start;
    console.log(duration);
  }
}

function performaceSensitiveFunc(){
    
}
