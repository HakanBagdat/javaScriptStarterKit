// Burasi yorum satiri
console.log("Merhaba Kodlama.io");

var dolarDun =9.20  //Normalde bu deger backend sunucusunden gelir Bu tip guvenli degil
dolarDun = 9.35
var dolarBugun = 9.30
//normalde 5. satir ile yapilan degisiklik javada calismaz degismez
console.log(dolarDun)


//undefined hatsi nedir tanimlanmamis demek
//bu hata ya console yazdirma degisken tanimlamadan once yapilmistir ya da oncesinde yapilip deger atanmamistir artik var keyword u kullanmiyoruz yerine let kullaniyoruz

{
    let dolarDun=9.10
    // asagida console ile yazilirsa bu eslestirme degil 9.35 calisir
    //burda var kullnilirsa patlar
    //js type safe degildir

    /**
     * 
     * 
     */
    
    //

}

console.log(dolarDun)


const euroDun =11.2
// euroDun =11.5 Bunu yapamiyoruz
/**
 * eger sen const ile atama yapilirsa bu degistirilirse hata mesaji alinir
 */
// console.log(euroDun)

//Birden fazla veriyi ayni degisken ile kullanmak icin array leren faydalaniyoruz array dizi demek
//PascalCasing
//camelCasing
//

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi", "Kamu Konut Kredisi","Ozel konut kredileri"]
//react js kullanan gelismis bir kutuphane
console.log(konutKredileri)



console.log("<ul>")
for(let i=0;i<3;i++){
    console.log("</li>"+i+"</li>")

}
console.log("</ul>")

console.log("<ul>")
for(let i=0;i<3;i++){
    console.log("</li>"+konutKredileri[i]+"</li>")

}
console.log("</ul>")

console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++){
    console.log("</li>"+konutKredileri[i]+"</li>")

}
console.log("</ul>")