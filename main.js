 const crypto = require('crypto');

 const baseChar =  {"!":108,'"':109,"#":110,"$":111,"%":112,"'":114,"(":115,")":116,"*":117,"+":118,",":119,"-":120,".":121,"/":122,"0":123,"1":124,"2":125,"3":126,"4":127,"5":128,"6":129,"7":130,"8":131,"9":132,":":133,";":134,"<":135,"=":136,">":137,"?":138,"@":139,"A":140,"B":141,"C":142,"D":143,"E":144,"F":145,"G":146,"H":147,"I":148,"J":149,"K":150,"L":151,"M":152,"N":153,"O":154,"P":155,"Q":156,"R":157,"S":158,"T":159,"U":160,"V":161,"W":162,"X":163,"Y":164,"Z":165,"[":166,"barra":167,"]":168,"^":169,"-":170,"'":171,"a":172,"b":173,"c":174,"d":175,"e":176,"f":177,"g":178,"h":179,"i":180,"j":181,"k":182,"l":183,"m":184,"n":185,"o":186,"p":187,"q":188,"r":189,"s":190,"t":191,"u":192,"v":193,"w":194,"x":195,"y":196,"z":197,"{":198,"|":199,"}":200,"~":201,"Del":202,"Ç":203,"ü":204,"é":205,"ã":206,"ä":207,"à":208,"å":209,"ç":210,"ê":211,"ë":212,"è":213,"ï":214,"î":215,"ì":216,"Ä":217,"Å":218,"É":219,"æ":220,"Æ":221,"ô":222,"ö":223,"ò":224,"û":225,"ù":226,"ÿ":227,"Ö":228,"Ü":229,"ø":230,"£":231,"Ø":232,"×":233,"ƒ":234,"á":235,"ù":236,"ó":237,"ú":238,"ñ":239,"Ñ":240,"ª":241,"º":242,"¿":243,"®":244,"¬":245,"½":246,"¼":247,"¡":248,"«":249,"»":250,"░":251,"▒":252,"▓":152,"│":254,"┤":256,"Á":257,"Â":258,"À":259,"©":260,"╣":261,"║":262,"╗":263,"╝":264,"¢":265,"¥":266,"┐":267,"└":267,"┴":268,"┬":269,"├":270,"─":271,"┼":272,"ã":273,"Ã":274,"╚":275,"╔":276,"╩":277,"╦":278,"╠":279,"═":280,"╬":281,"¤":282,"ð":283,"Ð":284,"Ê":285,"Ë":286,"È":287,"ı":288,"Í":289,"Î":290,"Ï":291,"┘":292,"┌":293,"█":294,"▄":295,"Ó":296,"ß":297,"Ô":298,"Ò":299,"õ":300,"Õ":301,"µ":302,"þ":303,"Þ":304,"Ú":305,"Û":306,"Ù":307,"ý":308,"Ý":309,"¯":310,"´":311,"±":312,"‗":313,"¾":315,"¶":316,"§":317,"÷":318,"¸":319,"°":320,"¨":321,"·":322,"¹":323,"³":324,"²":325,"■":326};

function cript(baseChar, chave, senha, pulo) {
    // Mapeamento dos índices da chave
    const indices = [...chave].map(letra => baseChar[letra] ?? null);

    // Ordena o alfabeto por baseChar
    const alfabeto = Object.keys(baseChar).sort((a, b) => baseChar[a] - baseChar[b]);
    const tamAlfab = alfabeto.length;

    // Cria a nova senha com base no "pulo"
    const novaSenha = [...senha].map(letra => {
        const posicao = alfabeto.indexOf(letra);
        if (posicao === -1) return letra; // Se o caractere não está no alfabeto, mantém
        const novaPosicao = (posicao + pulo) % tamAlfab; // Calcula a nova posição
        return alfabeto[novaPosicao]; // Retorna o caractere correspondente
    });
    //Mapeando indice Nova senha
    const indiceNovaSenha = [...novaSenha].map(letra => baseChar[letra] ?? null);
    let senhaHash = [];
    const criptografar = indiceNovaSenha.forEach((i)=>{
    	let hash = [];	
    	indices.forEach((n)=>{
    		hash.push(i * n);
    	});
    	senhaHash.push(hash.join(""));
    })
    // Resultados
    console.log("Índices da chave: ", indices);
    console.log("Índices da Nova Senha: ", indiceNovaSenha);
    console.log("Nova senha: ", novaSenha.join(""));
    const pwd = senhaHash.join("")
    const senhaBase64 = Buffer.from(pwd).toString('base64');
    const senhaMD5 = crypto.createHash('md5').update(pwd).digest('hex');
    console.log("Senha hash: ", pwd);
    console.log()
    console.log("Senha Base64: ", senhaBase64 );
    console.log()
    console.log("Senha MD5: ", senhaMD5 );
}


const chave = "abacate";
const senha = "abcd@123";
const pulo = 5;


cript(baseChar, chave, senha, pulo)


