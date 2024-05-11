$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = $(this).data('include')
        $(this).load(file)
    })
})



// ++ GOLD JQ - INCLUDE AND RUN HTML SCRIPT
// ?Bu koddaki load is not depreceated: Bu kodun sayfası için Bkz: https://api.jquery.com/load/
// Şu şekilde kullanımı OK::: .load( url [, data ] [, complete ] )

// ?Şuradaki kullanımı kaldırılmış::: .load( handler )  ::Bkz. https://api.jquery.com/load-shorthand/
// This API has been removed in jQuery 3.0.  Instead of .load( handler ) or .load( eventData, handler ), use .on( "load", handler ) or .on( "load", eventData, handler ), respectively. Instead of .load(), use .trigger( "load" ).


// ** --------------------------------------------------
// * GOLD JAVAQUERY KODU İLE ÇAĞRI. JSCODES dizininde ABKS-gold-incld-run.js dosyası. Çalışıyor ama bu kodla sidebar hep mainin altına kaçıyor. Hiç bir şekilde yan yana getiremedim. Ya da sütunlar birbirine giriyor. Bu yüzden diğer JS kodunu kullan.
    
// ^ Bu Java Query linkini heade eklemek gerekiyor:
    
// <script src="https://code.jquery.com/jquery-3.7.1.min.js"
// integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
// crossorigin="anonymous"></script>
    
// ^ SİLE: Alttaki JQuery Gold scriptinin eski bağlantısı.Yukarıdaki yenisi sorun olursa diye.
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

// ^ ABKS-gold-incld-run.js yi yani bu belgeyi çağırmak için. INCLUDE AND RUN GOLD HTML SCRIPT'ini doğrudan kullandım genellikle. Doğrudan değil, externaldan kullanırsan diye.
// <script type="text/javascript" src="JSCODES/gold-incld-run.js"></script>

// ^ BU SCRIPT İÇİN BODY (Navbar,Bir kod,Footer vb) İÇİNE YERLEŞTİRİLECEK PLACEHOLDER ÖRNEKLERİ
        // <div data-include="Gadgets/HavaDurumu.html"></div>
        // <div data-include="AnaYapi/avrHeader.html"></div>
        // BU ÇAĞRIYI İSE NAVBAR  İÇİNE ŞÖYLE GİRMİŞİM
// <a href="IncludeOrnekleri.html" 
        
