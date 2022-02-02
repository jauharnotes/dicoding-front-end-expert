const fs = require('fs')

const writableStream = fs.createWriteStream('./nodejs-basic/stream/output.txt')

writableStream.write('ini adalah teks baris pertama!\n')
writableStream.write('ini adalah teks baris kedua!\n')
writableStream.end('Akhir dari writable stream!')