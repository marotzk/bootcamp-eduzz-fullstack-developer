const { stat } = require('fs');
const os = require('os');

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;
  const totalMem = parseInt(totalmem() / 1024 / 1024);
  const freeMem = parseInt(freemem() / 1024 / 1024);
  const usage = (freeMem/totalMem) * 100;

  const stats = {
    Arch: arch(),
    Platform: platform(),
    TotalMem: `${totalMem} MB`,
    FreeMem: `${freeMem} MB`,
    /** Porcentagem de memoria em uso! */
    UsageMem: `${100 - usage.toFixed(2)} %`
  };
  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 3000);