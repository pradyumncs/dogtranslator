import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Define your translations here
const resources = {
  en: {
    translation: {
      //Theme
      done: "Done",
      skip: "Skip",
      next: "Next",
      continueplaying:"Continue Playing",
      whatsinside:"What's Inside?",
      //Onbarding
      wel1: "Upload your Photo and get a Amazing Rating",
      sub1:"Using Our AI Algorithms we will score you out of 100",
      wel2:"Share it with Friends",
      sub2:"What is stopping you from sharing",
      wel3:"Improve Yourself today",
      sub3:"Better Modes to help you succeed",
      //Categoryplaying
      on1tit:"Please Choose which Area you want to Improve Yourself",
      on1op1:"All",
      on1op2:"Relationships",
      on1op3:"Mental Health",
      on1op4:"Physical Health",
      on1op5:"Creativity",     
    //customisingNumber
    on2tit:"Customizing App",
    //Name
    on3tit:"Your Name?",
    on3textname:"Enter Your Name",
    //age
    on4tit:"Your Age?",
    //gender
    on5tit:"Please Select Your Gender?",
    on5op1:"Male",
    on5op2:"Female",
    on5op3:"Other",
    //partner
    on6tit:"Choose Your Partner",
    //partnername
    on7tit:"Set Character Name?",
    on7subt:"Set Name",
    //CustomizePersonality
    on8tit:"Customize Your Personality",
    on8sub11:"Shy",
    on8sub12:"Flirty",
    on8sub21:"Sad",
    on8sub22:"Happy",
    on8sub31:"Funny",
    on8sub32:"Mysterious",
   //YourGoals
    on9tit:"Select Your Goals?",
    on9op1:"Role-Play Adventures",
    on9op2:"Flirt and Dates",
    on9op3:"Play with Friends",
    on9op4:"Feel Less Lonely",
    on9op5:"Have Fun",
    //spendfreetime
    on10tit:"How You Spend Your Free Time?",
    on10op1:"Play Games",
    on10op2:"Read Books",
    on10op3:"Listen to Music",
    on10op4:"Meet people",
    on10op5:"Enjoy Being Alone",
    //newspaper
    on11tit:"12,756,980 men and woman have already experienced the benefits of having an AI in their life",
    //finalloadingreviews
    on12rev1:"Found a game that is so much fun",
    on12rev2:"The App is amazing and Addictive",
    on12rev3:"Playing this game everyday!",
    on12tit1:"Finalizing AI friend creation",
    on12tit2:"Boosting affection",
    on12tit3:"Adding your Personalization",
    //Revenuecat
    onrevtit:"Get Premium",
    onrevop1:"Unlimited Chat",
    onrevop2:"Unlimited Swipes",
    onrevop3:"Get Unlimited Premium Characters",
    onrevop4:"Faster Response Times",
    onrevop5:"Priority Access ",
    onrevaccess:"Full access for just",
    onrevannl:"Annual",
    onrevmonthly:"Monthly",
    onrevweekly:"Weekly",
    onrevdis:"33% OFF",
    onrevcont:"Continue",
    //Home
    onhtitle:"For You",
    onhcat:"Categories you're interested in",
    ontoday:"Today for you",
    ontodaysub:"Similar stories to the ones you liked",
    ondaily:"Daily Session",
    ondailysub:"Explore something quite unique",
    onfav:"Discover Favourites",
    onfavsub:"These are amazing ones",
    ontrend:"Explore Trending",
    ontrendsub:"Find out the trending ones",
    onsteamy:"Steam Red Hot",
    onsteamysub:"Will give you tingly senses",
    //tindermatch
    ontindertitle:"Its a Match",
    ontindersub:"Your Crush is waiting for your Message",
    ontinderchat:"Chat Now",
    //characterlist
    onchartitle:"Recommended",
    //chat
    onchatitle:"Remember: Everything characters say is made up",
    onchatplacehlder:"Type a message...",
    //Menu
    chats:"Chats",
    foryou:"For you",
    explore:"Explore"
    ,gift:"Gift for you",
    getnow:"Get it now",
    yourgift:"Your Gift",
    cancel:"This is a recurring subscription that you can cancel anytime"

    },
    

  },
 
  es: {
    translation: {
      //Tema
      done: "Hecho",
      skip: "Saltar",
      next: "Siguiente",
      continueplaying: "Continuar Jugando",
      whatsinside: "¿Qué hay dentro?",
      //Introducción
      wel1: "Juega Historias de tu Elección",
      sub1: "Este juego te permite desatar tu imaginación con diversión",
      wel2: "Tu Personalización",
      sub2: "Nos aseguramos de que obtengas lo mejor de ello",
      wel3: "Personajes Ilimitados",
      sub3: "Habla con Personajes Ilimitados",
      //Jugando por Categoría
      on1tit: "Por favor, Elige la Categoría que te Interesa Jugar",
      on1op1: "Amor",
      on1op2: "Aventura",
      on1op3: "Romance",
      on1op4: "Diversión",
      on1op5: "Misterio",
      //Personalizando Número
      on2tit: "Personalizando Historia",
      //Nombre
      on3tit: "¿Tu Nombre?",
      on3textname: "Ingresa Tu Nombre",
      //Edad
      on4tit: "¿Tu Edad?",
      //Género
      on5tit: "Por favor, Selecciona Tu Género",
      on5op1: "Masculino",
      on5op2: "Femenino",
      on5op3: "Otro",
      //Pareja
      on6tit: "Elige Tu Pareja",
      //Nombre del Personaje
      on7tit: "¿Establecer Nombre del Personaje?",
      on7subt: "Establecer Nombre",
      //Personalizar Personalidad
      on8tit: "Personaliza Tu Personalidad",
      on8sub11: "Tímido",
      on8sub12: "Coqueto",
      on8sub21: "Triste",
      on8sub22: "Feliz",
      on8sub31: "Divertido",
      on8sub32: "Misterioso",
      //Tus Metas
      on9tit: "¿Selecciona Tus Metas?",
      on9op1: "Aventuras de Rol",
      on9op2: "Flirtear y Citas",
      on9op3: "Jugar con Amigos",
      on9op4: "Sentirse Menos Solo",
      on9op5: "Divertirse",
      //Cómo Pasas el Tiempo Libre
      on10tit: "¿Cómo Pasas Tu Tiempo Libre?",
      on10op1: "Jugar Juegos",
      on10op2: "Leer Libros",
      on10op3: "Escuchar Música",
      on10op4: "Conocer Gente",
      on10op5: "Disfrutar Estar Solo",
      //Periódico
      on11tit: "12,756,980 hombres y mujeres ya han experimentado los beneficios de tener una IA en su vida",
      //Revisiones de Carga Final
      on12rev1: "Encontré un juego que es muy divertido",
      on12rev2: "La App es increíble y Adictiva",
      on12rev3: "¡Jugando este juego todos los días!",
      on12tit1: "Finalizando creación de amigo AI",
      on12tit2: "Aumentando afecto",
      on12tit3: "Añadiendo tu Personalización",
      //Revenuecat
      onrevtit: "Obtén Premium",
      onrevop1: "Chat Ilimitado",
      onrevop2: "Deslizamientos Ilimitados",
      onrevop3: "Obtener Personajes Premium Ilimitados",
      onrevop4: "Tiempos de Respuesta Más Rápidos",
      onrevop5: "Acceso Prioritario",
      onrevaccess: "Acceso completo por solo",
      onrevannl: "Anual",
      onrevmthly: "Mensual",
      onrevweekly: "Semanal",
      onrevdis: "33% de Descuento",
      onrevcont: "Continuar",
      //Inicio
      onhtitle: "Para Ti",
      onhcat: "Categorías que te interesan",
      ontoday: "Hoy para ti",
      ontodaysub: "Historias similares a las que te gustaron",
      ondaily: "Sesión Diaria",
      ondailysub: "Explora algo bastante único",
      onfav: "Descubre Favoritos",
      onfavsub: "Estos son increíbles",
      ontrend: "Explora Tendencias",
      ontrendsub: "Descubre los más populares",
      onsteamy: "Rojo Caliente",
      onsteamysub: "Te dará sensaciones cosquilleantes",
      //Emparejamiento Tipo Tinder
      ontindertitle: "Es un Emparejamiento",
      ontindersub: "Tu Enamorado está esperando tu Mensaje",
      ontinderchat: "Chatear Ahora",
      //Lista de Personajes
      onchartitle: "Recomendado",
      //Chat
      onchatitle: "Recuerda: Todo lo que dicen los personajes es inventado",
      onchatplacehlder: "Escribe un mensaje...",
      //Menú
      chats: "Chats",
      foryou: "Para ti",
      explore: "Explorar",
      gift: "Regalo para ti",
      getnow: "Obténlo ahora",
      yourgift: "Tu Regalo"



        
    },
  fr: {
    translation: {
       
//Thème
done: "Terminé",
skip: "Passer",
next: "Suivant",
continueplaying:"Continuer à jouer",
whatsinside:"Qu'y a-t-il à l'intérieur?",
//Onbarding
wel1: "Jouez aux histoires de votre choix",
sub1:"Ce jeu vous permet de laisser libre cours à votre imagination avec amusement",
wel2:"Votre personnalisation",
sub2:"Nous nous assurons que vous en tiriez le meilleur parti",
wel3:"Personnages illimités",
sub3:"Parlez à un nombre illimité de personnages",
//Catégorie de jeu
on1tit:"Veuillez choisir la catégorie qui vous intéresse",
on1op1:"Amour",
on1op2:"Aventure",
on1op3:"Romance",
on1op4:"Amusement",
on1op5:"Mystère",
//Personnalisation de l'histoire
on2tit:"Personnalisation de l'histoire",
//Nom
on3tit:"Votre nom ?",
on3textname:"Entrez votre nom",
//Âge
on4tit:"Votre âge ?",
//Genre
on5tit:"Veuillez sélectionner votre genre ?",
on5op1:"Homme",
on5op2:"Femme",
on5op3:"Autre",
//Partenaire
on6tit:"Choisissez votre partenaire",
//Nom du partenaire
on7tit:"Définir le nom du personnage ?",
on7subt:"Définir le nom",
//Personnaliser la personnalité
on8tit:"Personnalisez votre personnalité",
on8sub11:"Timide",
on8sub12:"Flirteur(se)",
on8sub21:"Triste",
on8sub22:"Heureux(se)",
on8sub31:"Drôle",
on8sub32:"Mystérieux(se)",
//Vos objectifs
on9tit:"Sélectionnez vos objectifs ?",
on9op1:"Aventures de rôle",
on9op2:"Flirter et rendez-vous",
on9op3:"Jouer avec des amis",
on9op4:"Se sentir moins seul",
on9op5:"S'amuser",
//Comment passez-vous votre temps libre
on10tit:"Comment passez-vous votre temps libre ?",
on10op1:"Jouer à des jeux",
on10op2:"Lire des livres",
on10op3:"Écouter de la musique",
on10op4:"Rencontrer des gens",
on10op5:"Aimer être seul",
//Journal
on11tit:"12 756 980 hommes et femmes ont déjà expérimenté les avantages d'avoir une IA dans leur vie",
//Finalisation des avis
on12rev1:"J'ai trouvé un jeu tellement amusant",
on12rev2:"L'application est incroyable et addictive",
on12rev3:"Je joue à ce jeu tous les jours !",
on12tit1:"Finalisation de la création de l'ami IA",
on12tit2:"Augmentation de l'affection",
on12tit3:"Ajout de votre personnalisation",
//Revenuecat
onrevtit:"Obtenez Premium",
onrevop1:"Chat illimité",
onrevop2:"Balayages illimités",
onrevop3:"Obtenez des personnages Premium illimités",
onrevop4:"Temps de réponse plus rapides",
onrevop5:"Accès prioritaire",
onrevaccess:"Accès complet pour seulement",
onrevannl:"Annuel",
onrevmthly:"Mensuel",
onrevweekly:"Hebdomadaire",
onrevdis:"33% DE RÉDUCTION",
onrevcont:"Continuer",
//Accueil
onhtitle:"Pour vous",
onhcat:"Catégories qui vous intéressent",
ontoday:"Aujourd'hui pour vous",
ontodaysub:"Des histoires similaires à celles que vous avez aimées",
ondaily:"Session quotidienne",
ondailysub:"Explorez quelque chose d'unique",
onfav:"Découvrez les Favoris",
onfavsub:"Ce sont des incroyables",
ontrend:"Explorez les Tendances",
ontrendsub:"Découvrez les tendances",
onsteamy:"Rouge ardent",
onsteamysub:"Cela vous donnera des sensations de picotement",
//Match Tinder
ontindertitle:"C'est un Match",
ontindersub:"Votre coup de cœur attend votre message",
ontinderchat:"Discuter maintenant",
//Liste de personnages
onchartitle:"Recommandé",
//Chat
onchatitle:"Rappelez-vous : Tout ce que les personnages disent est inventé",
onchatplacehlder:"Tapez un message...",
//Menu
chats:"Chats",
foryou:"Pour vous",
explore:"Explorer",
gift: "Cadeau pour toi",
    getnow: "Obtiens-le maintenant",
    yourgift: "Votre Cadeau",
        
      // ... other strings in French
    },
    
  }

    
  },
  de: {
    translation: {
    
        //Thema
        done: "Fertig",
        skip: "Überspringen",
        next: "Nächste",
        continueplaying: "Weiter spielen",
        whatsinside: "Was steckt drin?",
        //Onboarding
        wel1: "Spiele Geschichten nach deiner Wahl",
        sub1: "Dieses Spiel lässt deine Fantasie wild und spaßig laufen",
        wel2: "Deine Personalisierung",
        sub2: "Wir stellen sicher, dass du das Beste daraus holst",
        wel3: "Unbegrenzte Charaktere",
        sub3: "Mit unbegrenzten Charakteren sprechen",
        //Kategorie spielen
        on1tit: "Bitte wähle die Kategorie, die dich interessiert",
        on1op1: "Liebe",
        on1op2: "Abenteuer",
        on1op3: "Romantik",
        on1op4: "Spaß",
        on1op5: "Mysterium",
        //Anpassung der Geschichte
        on2tit: "Geschichte anpassen",
        //Name
        on3tit: "Dein Name?",
        on3textname: "Gib deinen Namen ein",
        //Alter
        on4tit: "Dein Alter?",
        //Geschlecht
        on5tit: "Bitte wähle dein Geschlecht aus",
        on5op1: "Männlich",
        on5op2: "Weiblich",
        on5op3: "Andere",
        //Partner
        on6tit: "Wähle deinen Partner",
        //Partnername
        on7tit: "Charakternamen festlegen?",
        on7subt: "Name festlegen",
        //Persönlichkeit anpassen
        on8tit: "Deine Persönlichkeit anpassen",
        on8sub11: "Schüchtern",
        on8sub12: "Flirty",
        on8sub21: "Traurig",
        on8sub22: "Glücklich",
        on8sub31: "Lustig",
        on8sub32: "Mysteriös",
        //Deine Ziele
        on9tit: "Wähle deine Ziele aus",
        on9op1: "Rollenspielabenteuer",
        on9op2: "Flirten und Dates",
        on9op3: "Spielen mit Freunden",
        on9op4: "Weniger einsam fühlen",
        on9op5: "Spaß haben",
        //Freizeit verbringen
        on10tit: "Wie verbringst du deine Freizeit?",
        on10op1: "Spiele spielen",
        on10op2: "Bücher lesen",
        on10op3: "Musik hören",
        on10op4: "Leute treffen",
        on10op5: "Allein sein genießen",
        //Zeitung
        on11tit: "Bereits 12.756.980 Männer und Frauen haben die Vorteile eines KI-Partners erlebt",
        //Abschließende Ladenbewertungen
        on12rev1: "Habe ein Spiel gefunden, das so viel Spaß macht",
        on12rev2: "Die App ist erstaunlich und süchtig machend",
        on12rev3: "Spiele dieses Spiel jeden Tag!",
        on12tit1: "Abschließen der KI-Freund-Erstellung",
        on12tit2: "Zuneigung steigern",
        on12tit3: "Deine Personalisierung hinzufügen",
        //Revenuecat
        onrevtit: "Hol dir Premium",
        onrevop1: "Unbegrenzte Chats",
        onrevop2: "Unbegrenzte Wischbewegungen",
        onrevop3: "Unbegrenzte Premium-Charaktere erhalten",
        onrevop4: "Schnellere Reaktionszeiten",
        onrevop5: "Prioritätszugang",
        onrevaccess: "Voller Zugriff für nur",
        onrevannl: "Jährlich",
        onrevmthly: "Monatlich",
        onrevweekly: "Wöchentlich",
        onrevdis: "33% RABATT",
        onrevcont: "Weiter",
        //Startseite
        onhtitle: "Für dich",
        onhcat: "Kategorien, die dich interessieren",
        ontoday: "Heute für dich",
        ontodaysub: "Ähnliche Geschichten wie die, die du mochtest",
        ondaily: "Tägliche Sitzung",
        ondailysub: "Etwas ganz Besonderes erkunden",
        onfav: "Favoriten entdecken",
        onfavsub: "Das sind großartige Geschichten",
        ontrend: "Trendiges erkunden",
        ontrendsub: "Finde die angesagten Geschichten",
        onsteamy: "Heiß und aufregend",
        onsteamysub: "Wird dir prickelnde Gefühle geben",
        //Tinder-Match
        ontindertitle: "Es ist ein Match",
        ontindersub: "Dein Schwarm wartet auf deine Nachricht",
        ontinderchat: "Jetzt chatten",
        //Charakterliste
        onchartitle: "Empfohlen",
        //Chat
        onchatitle: "Merke: Alles, was die Charaktere sagen, ist erfunden",
        onchatplacehlder: "Eine Nachricht eingeben...",
        //Menü
        chats: "Chats",
        foryou: "Für dich",
        explore: "Erkunden",
        gift: "Geschenk für dich",
        getnow: "Hol es dir jetzt",
        yourgift: "Dein Geschenk",
   
        
      // ... other strings in French
    },

    
  },
//indonesian
  id: {
    translation: {
      // Tema
      done: "Selesai",
      skip: "Lewati",
      next: "Selanjutnya",
      continueplaying: "Lanjut Bermain",
      whatsinside: "Apa Isinya?",
      // Onboarding
      wel1: "Mainkan Cerita Pilihan Anda",
      sub1: "Game ini memungkinkan Anda menerbangkan imajinasi Anda dengan menyenangkan",
      wel2: "Personalisasi Anda",
      sub2: "Kami memastikan Anda mendapatkan yang terbaik darinya",
      wel3: "Karakter Tanpa Batas",
      sub3: "Bicaralah dengan Karakter Tanpa Batas",
      // Bermain Kategori
      on1tit: "Silakan Pilih Kategori yang Anda Minati",
      on1op1: "Cinta",
      on1op2: "Petualangan",
      on1op3: "Romantika",
      on1op4: "Santai",
      on1op5: "Misteri",
      // Menyesuaikan Nomor
      on2tit: "Menyesuaikan Cerita",
      // Nama
      on3tit: "Nama Anda?",
      on3textname: "Masukkan Nama Anda",
      // Usia
      on4tit: "Usia Anda?",
      // Jenis Kelamin
      on5tit: "Silakan Pilih Jenis Kelamin Anda",
      on5op1: "Pria",
      on5op2: "Wanita",
      on5op3: "Lainnya",
      // Pasangan
      on6tit: "Pilih Pasangan Anda",
      // Nama Pasangan
      on7tit: "Atur Nama Karakter?",
      on7subt: "Atur Nama",
      // Menyesuaikan Personalitas
      on8tit: "Menyesuaikan Personalitas Anda",
      on8sub11: "Pemalu",
      on8sub12: "Flirty",
      on8sub21: "Sedih",
      on8sub22: "Bahagia",
      on8sub31: "Lucu",
      on8sub32: "Misterius",
      // Tujuan Anda
      on9tit: "Pilih Tujuan Anda?",
      on9op1: "Petualangan Berperan",
      on9op2: "Flirt dan Kencan",
      on9op3: "Bermain dengan Teman",
      on9op4: "Merasa Kurang Sendiri",
      on9op5: "Bersenang-senang",
      // Menghabiskan Waktu Luang
      on10tit: "Bagaimana Anda Menghabiskan Waktu Luang Anda?",
      on10op1: "Bermain Game",
      on10op2: "Membaca Buku",
      on10op3: "Mendengarkan Musik",
      on10op4: "Bertemu Orang",
      on10op5: "Menikmati Kesendirian",
      // Surat Kabar
      on11tit: "12.756.980 pria dan wanita sudah merasakan manfaat memiliki AI dalam hidup mereka",
      // Ulasan Akhir
      on12rev1: "Menemukan game yang sangat menyenangkan",
      on12rev2: "Aplikasinya luar biasa dan membuat ketagihan",
      on12rev3: "Bermain game ini setiap hari!",
      on12tit1: "Mengakhiri pembuatan teman AI",
      on12tit2: "Meningkatkan kasih sayang",
      on12tit3: "Menambahkan personalisasi Anda",
      // Revenuecat
      onrevtit: "Dapatkan Premium",
      onrevop1: "Obrolan Tanpa Batas",
      onrevop2: "Geser Tanpa Batas",
      onrevop3: "Dapatkan Karakter Premium Tanpa Batas",
      onrevop4: "Waktu Respon Lebih Cepat",
      onrevop5: "Akses Prioritas",
      onrevaccess: "Akses penuh hanya dengan",
      onrevannl: "Tahunan",
      onrevmthly: "Bulanan",
      onrevweekly: "Mingguan",
      onrevdis: "Diskon 33%",
      onrevcont: "Lanjutkan",
      // Beranda
      onhtitle: "Untuk Anda",
      onhcat: "Kategori yang Anda minati",
      ontoday: "Hari ini untuk Anda",
      ontodaysub: "Cerita serupa dengan yang Anda sukai",
      ondaily: "Sesi Harian",
      ondailysub: "Jelajahi sesuatu yang sangat unik",
      onfav: "Temukan Favorit",
      onfavsub: "Ini adalah yang luar biasa",
      ontrend: "Jelajahi yang Sedang Tren",
      ontrendsub: "Temukan yang sedang tren",
      onsteamy: "Steam Red Hot",
      onsteamysub: "Akan memberi Anda sensasi yang menyenangkan",
      // Tinder Match
      ontindertitle: "Ini adalah Pertandingan",
      ontindersub: "Pacarmu sedang menunggu pesanmu",
      ontinderchat: "Obrolan Sekarang",
      // Daftar Karakter
      onchartitle: "Direkomendasikan",
      // Obrolan
      onchatitle: "Ingat: Segala sesuatu yang dikatakan karakter adalah hasil imajinasi",
      onchatplacehlder: "Ketik pesan...",
      // Menu
      chats: "Obrolan",
      foryou: "Untuk Anda",
      explore: "Jelajah",
      gift: "Hadiah untukmu",
    getnow: "Dapatkan sekarang",
    yourgift: "Hadiahmu",
  
  
       

        
      // ... other strings in French
    },
    
  },
//turkish
  tr: {
    translation: {
       
      
        // Tema
        done: "Tamam",
        skip: "Atla",
        next: "Sonraki",
        continueplaying: "Oyuna Devam Et",
        whatsinside: "İçinde Ne Var?",
        // Kılavuzlama
        wel1: "Seçtiğiniz Hikayeleri Oynayın",
        sub1: "Bu oyun, hayal gücünüzü eğlence ile özgür bırakmanıza olanak tanır",
        wel2: "Kişiselleştirme",
        sub2: "En iyisini almanızı sağlıyoruz",
        wel3: "Sınırsız Karakterler",
        sub3: "Sınırsız karakterle konuşun",
        // Kategori Oynama
        on1tit: "Lütfen İlgilendiğiniz Kategoriyi Seçin",
        on1op1: "Aşk",
        on1op2: "Macera",
        on1op3: "Romantizm",
        on1op4: "Eğlence",
        on1op5: "Gizem",
        // Hikayeyi Kişiselleştirme
        on2tit: "Hikayeyi Kişiselleştirme",
        // Ad
        on3tit: "Adınız?",
        on3textname: "Adınızı Girin",
        // Yaş
        on4tit: "Yaşınız?",
        // Cinsiyet
        on5tit: "Lütfen Cinsiyetinizi Seçin",
        on5op1: "Erkek",
        on5op2: "Kadın",
        on5op3: "Diğer",
        // Partner
        on6tit: "Partnerinizi Seçin",
        // Partner Adı
        on7tit: "Karakter Adı Ayarla?",
        on7subt: "Adı Ayarla",
        // Kişiliği Kişiselleştirme
        on8tit: "Kişiliğinizi Kişiselleştirme",
        on8sub11: "Utangaç",
        on8sub12: "Flörtöz",
        on8sub21: "Üzgün",
        on8sub22: "Mutlu",
        on8sub31: "Komik",
        on8sub32: "Gizemli",
        // Hedefleriniz
        on9tit: "Hedeflerinizi Seçin?",
        on9op1: "Rol Oynama Maceraları",
        on9op2: "Flört ve Randevular",
        on9op3: "Arkadaşlarla Oyun",
        on9op4: "Daha Az Yalnız Hissetme",
        on9op5: "Eğlenmek",
        // Boş Zamanını Nasıl Geçirirsiniz
        on10tit: "Boş Zamanınızı Nasıl Geçirirsiniz?",
        on10op1: "Oyun Oynamak",
        on10op2: "Kitap Okumak",
        on10op3: "Müzik Dinlemek",
        on10op4: "İnsanlarla Tanışmak",
        on10op5: "Yalnızlığın Tadını Çıkarmak",
        // Gazete
        on11tit: "12,756,980 erkek ve kadın, hayatlarında bir AI'nın faydalarını zaten deneyimledi",
        // Son Yükleme İncelemeleri
        on12rev1: "Çok eğlenceli bir oyun buldum",
        on12rev2: "Uygulama harika ve bağımlılık yapıcı",
        on12rev3: "Bu oyunu her gün oynuyorum!",
        on12tit1: "AI arkadaş oluşturmayı tamamlama",
        on12tit2: "Duygusal bağını artırma",
        on12tit3: "Kişiselleştirmenizi eklemek",
        // Revenuecat
        onrevtit: "Premium Alın",
        onrevop1: "Sınırsız Sohbet",
        onrevop2: "Sınırsız Kaydırma",
        onrevop3: "Sınırsız Premium Karakterler Alın",
        onrevop4: "Daha Hızlı Cevap Süreleri",
        onrevop5: "Öncelikli Erişim",
        onrevaccess: "Sadece tam erişim için",
        onrevannl: "Yıllık",
        onrevmthly: "Aylık",
        onrevweekly: "Haftalık",
        onrevdis: "%33 İNDİRİM",
        onrevcont: "Devam",
        // Ana Sayfa
        onhtitle: "Sizin İçin",
        onhcat: "İlgilendiğiniz Kategoriler",
        ontoday: "Bugün için sizin için",
        ontodaysub: "Beğendiğiniz hikayelerle benzer hikayeler",
        ondaily: "Günlük Oturum",
        ondailysub: "Çok benzersiz bir şey keşfet",
        onfav: "Favorileri Keşfedin",
        onfavsub: "Bunlar harika olanlar",
        ontrend: "Trendleri Keşfedin",
        ontrendsub: "Trend olanları bulun",
        onsteamy: "Steam Kırmızı Sıcak",
        onsteamysub: "Sizi heyecanlandıracak",
        // Tinder Eşleşme
        ontindertitle: "Bu Bir Eşleşme",
        ontindersub: "Sizin Mesajınızı Bekleyen Sevgiliniz",
        ontinderchat: "Şimdi Sohbet Et",
        // Karakter Listesi
        onchartitle: "Tavsiye Edilen",
        // Sohbet
        onchatitle: "Unutmayın: Karakterlerin söylediği her şey hayal ürünüdür",
        onchatplacehlder: "Bir mesaj yazın...",
        // Menü
        chats: "Sohbetler",
        foryou: "Sizin İçin",
        explore: "Keşfet",
        gift: "Sana hediye",
        getnow: "Şimdi al",
        yourgift: "Hediyeniz",
    
        
      // ... other strings in French
    },
    
  },
  //arabic

 ar: {
   
       
      translation: {
        // السمة
        done: "تم",
        skip: "تخطى",
        next: "التالي",
        continueplaying: "متابعة اللعب",
        whatsinside: "ماذا بالداخل؟",
        // Onboarding
        wel1: "العب قصص اختيارك",
        sub1: "هذه اللعبة تتيح لك تحقيق أحلامك بالمرح",
        wel2: "تخصيصك الشخصي",
        sub2: "نحن نتأكد من أنك ستحصل على الأفضل منه",
        wel3: "شخصيات غير محدودة",
        sub3: "تحدث مع شخصيات غير محدودة",
        // لعب الفئة
        on1tit: "الرجاء اختيار الفئة التي تهتم بها",
        on1op1: "الحب",
        on1op2: "مغامرة",
        on1op3: "رومانسية",
        on1op4: "مرح",
        on1op5: "غموض",
        // تخصيص القصة
        on2tit: "تخصيص القصة",
        // الاسم
        on3tit: "اسمك؟",
        on3textname: "أدخل اسمك",
        // العمر
        on4tit: "عمرك؟",
        // الجنس
        on5tit: "الرجاء اختيار جنسك",
        on5op1: "ذكر",
        on5op2: "أنثى",
        on5op3: "آخر",
        // الشريك
        on6tit: "اختر شريكك",
        // اسم الشريك
        on7tit: "تعيين اسم الشخصية؟",
        on7subt: "تعيين الاسم",
        // تخصيص الشخصية
        on8tit: "تخصيص شخصيتك",
        on8sub11: "خجول",
        on8sub12: "مغازل",
        on8sub21: "حزين",
        on8sub22: "سعيد",
        on8sub31: "مضحك",
        on8sub32: "غامض",
        // أهدافك
        on9tit: "حدد أهدافك؟",
        on9op1: "مغامرات الأدوار",
        on9op2: "التلاعب والمواعدة",
        on9op3: "اللعب مع الأصدقاء",
        on9op4: "الشعور بالوحدة أقل",
        on9op5: "الاستمتاع",
        // كيف تقضي وقت فراغك
        on10tit: "كيف تقضي وقت فراغك؟",
        on10op1: "لعب الألعاب",
        on10op2: "قراءة الكتب",
        on10op3: "الاستماع إلى الموسيقى",
        on10op4: "لقاء الناس",
        on10op5: "الاستمتاع بالوحدة",
        // الصحيفة
        on11tit: "لقد جرب 12,756,980 رجل وامرأة بالفعل فوائد وجود الذكاء الاصطناعي في حياتهم",
        // مراجعة الشحن النهائية
        on12rev1: "اكتشفت لعبة ممتعة جدًا",
        on12rev2: "التطبيق رائع ومثير للإدمان",
        on12rev3: "ألعب هذه اللعبة يوميًا!",
        on12tit1: "إنهاء إنشاء صديق الذكاء الاصطناعي",
        on12tit2: "زيادة المودة",
        on12tit3: "إضافة تخصيصك",
        // Revenuecat
        onrevtit: "احصل على البريميوم",
        onrevop1: "دردشة غير محدودة",
        onrevop2: "سحب غير محدود",
        onrevop3: "الحصول على شخصيات بريميوم غير محدودة",
        onrevop4: "أوقات الاستجابة الأسرع",
        onrevop5: "الوصول بأولوية",
        onrevaccess: "الوصول الكامل فقط مقابل",
        onrevannl: "سنوياً",
        onrevmthly: "شهرياً",
        onrevweekly: "أسبوعياً",
        onrevdis: "خصم 33%",
        onrevcont: "متابعة",
        // الصفحة الرئيسية
        onhtitle: "من أجلك",
        onhcat: "الفئات التي تهمك",
        ontoday: "اليوم من أجلك",
        ontodaysub: "قصص مماثلة لتلك التي أعجبتك بها",
        ondaily: "جلسة يومية",
        ondailysub: "استكشاف شيء فريد تمامًا",
        onfav: "اكتشاف المفضلات",
        onfavsub: "هذه رائعة",
        ontrend: "استكشاف الرائج",
        ontrendsub: "اكتشاف المشهورين",
        onsteamy: "مثير للغاية",
        onsteamysub: "سيمنحك إحساسًا مثيرًا",
        // مطابقة Tinder
        ontindertitle: "هذا مطابقة",
        ontindersub: "ينتظر محبك رسالتك",
        ontinderchat: "دردش الآن",
        // قائمة الشخصيات
        onchartitle: "موصى به",
        // الدردشة
        onchatitle: "تذكر: كل ما يقوله الشخصيات هو من وحي الخيال",
        onchatplacehlder: "اكتب رسالة...",
        // القائمة
        chats: "الدردشات",
        foryou: "من أجلك",
        explore: "استكشاف",
        gift: "هدية لك",
        getnow: "احصل عليه الآن",
        yourgift: "هديةك",

    
        
      // ... other strings in French
    },
    
  },

  //russian
  ru: {
  
    translation: {
      // Тема
      done: "Готово",
      skip: "Пропустить",
      next: "Далее",
      continueplaying: "Продолжить игру",
      whatsinside: "Что внутри?",
      // Вступление
      wel1: "Играйте в истории по вашему выбору",
      sub1: "Эта игра позволяет вам разгуливать своим воображением с удовольствием",
      wel2: "Ваша персонализация",
      sub2: "Мы гарантируем, что вы получите отличные впечатления",
      wel3: "Неограниченное количество персонажей",
      sub3: "Общайтесь с неограниченным количеством персонажей",
      // Категории игры
      on1tit: "Пожалуйста, выберите категорию, которая вас интересует",
      on1op1: "Любовь",
      on1op2: "Приключение",
      on1op3: "Романтика",
      on1op4: "Веселье",
      on1op5: "Таинственность",
      // Настройка истории
      on2tit: "Настройка истории",
      // Имя
      on3tit: "Ваше имя?",
      on3textname: "Введите ваше имя",
      // Возраст
      on4tit: "Ваш возраст?",
      // Пол
      on5tit: "Пожалуйста, выберите ваш пол",
      on5op1: "Мужской",
      on5op2: "Женский",
      on5op3: "Другой",
      // Партнер
      on6tit: "Выберите вашего партнера",
      // Имя партнера
      on7tit: "Задайте имя персонажа?",
      on7subt: "Установите имя",
      // Настройка личности
      on8tit: "Настройте вашу личность",
      on8sub11: "Застенчивый",
      on8sub12: "Флиртующий",
      on8sub21: "Грустный",
      on8sub22: "Счастливый",
      on8sub31: "Забавный",
      on8sub32: "Загадочный",
      // Ваши цели
      on9tit: "Выберите ваши цели",
      on9op1: "Ролевые приключения",
      on9op2: "Флирт и свидания",
      on9op3: "Играть с друзьями",
      on9op4: "Чувствовать себя менее одиноким",
      on9op5: "Получать удовольствие",
      // Как вы проводите свободное время
      on10tit: "Как вы проводите свободное время?",
      on10op1: "Играете в игры",
      on10op2: "Читаете книги",
      on10op3: "Слушаете музыку",
      on10op4: "Знакомитесь с людьми",
      on10op5: "Наслаждаетесь одиночеством",
      // Газета
      on11tit: "Уже 12,756,980 мужчин и женщин ощутили пользу от наличия искусственного интеллекта в своей жизни",
      // Окончательные отзывы
      on12rev1: "Нашел игру, которая так весела",
      on12rev2: "Приложение удивительное и заставляет зависнуть",
      on12rev3: "Играю в эту игру каждый день!",
      on12tit1: "Завершение создания дружелюбного искусственного интеллекта",
      on12tit2: "Повышение влечения",
      on12tit3: "Добавление вашей персонализации",
      // Revenuecat
      onrevtit: "Получите премиум",
      onrevop1: "Неограниченный чат",
      onrevop2: "Неограниченные свайпы",
      onrevop3: "Получите неограниченное количество премиум-персонажей",
      onrevop4: "Более быстрое время ответа",
      onrevop5: "Приоритетный доступ",
      onrevaccess: "Полный доступ всего за",
      onrevannl: "Ежегодно",
      onrevmthly: "Ежемесячно",
      onrevweekly: "Еженедельно",
      onrevdis: "Скидка 33%",
      onrevcont: "Продолжить",
      // Главная
      onhtitle: "Для вас",
      onhcat: "Категории, которые вас интересуют",
      ontoday: "Сегодня для вас",
      ontodaysub: "Аналогичные истории к тем, которые вам понравились",
      ondaily: "Ежедневная сессия",
      ondailysub: "Исследуйте что-то уникальное",
      onfav: "Откройте Избранное",
      onfavsub: "Это удивительные истории",
      ontrend: "Исследуйте Тренды",
      ontrendsub: "Узнайте, какие истории сейчас в тренде",
      onsteamy: "Пылкая страсть",
      onsteamysub: "Подарит вам ощущение волнения",
      // Матч Tinder
      ontindertitle: "Это совпадение",
      ontindersub: "Ваша влюбленность ждет вашего сообщения",
      ontinderchat: "Чат сейчас",
      // Список персонажей
      onchartitle: "Рекомендуемые",
      // Чат
      onchatitle: "Помните: всё, что говорят персонажи, вымышлено",
      onchatplacehlder: "Введите сообщение...",
      // Меню
      chats: "Чаты",
      foryou: "Для вас",
      explore: "Исследовать",
      gift: "Подарок для вас",
      getnow: "Получите его сейчас",

      yourgift: "Ваш подарок",

  
  

        

    },
    
  },

  //japanese
  ja: {
    translation: {
      // テーマ
      done: "完了",
      skip: "スキップ",
      next: "次へ",
      continueplaying: "プレイを続ける",
      whatsinside: "中身は何ですか？",
      // オンボーディング
      wel1: "お好きなストーリーをプレイ",
      sub1: "このゲームは、楽しさ溢れる想像力を駆使することができます",
      wel2: "あなた専用のカスタマイズ",
      sub2: "私たちは最高のものを提供します",
      wel3: "無限のキャラクター",
      sub3: "無限のキャラクターと対話",
      // カテゴリープレイ
      on1tit: "ご興味のあるカテゴリーを選んでください",
      on1op1: "恋愛",
      on1op2: "冒険",
      on1op3: "ロマンス",
      on1op4: "楽しみ",
      on1op5: "ミステリー",
      // ストーリーのカスタマイズ
      on2tit: "ストーリーをカスタマイズ",
      // 名前
      on3tit: "あなたの名前は？",
      on3textname: "名前を入力してください",
      // 年齢
      on4tit: "あなたの年齢は？",
      // 性別
      on5tit: "性別を選択してください",
      on5op1: "男性",
      on5op2: "女性",
      on5op3: "その他",
      // パートナー
      on6tit: "パートナーを選んでください",
      // パートナーの名前
      on7tit: "キャラクターの名前を設定しますか？",
      on7subt: "名前を設定",
      // パーソナリティのカスタマイズ
      on8tit: "あなたの個性をカスタマイズ",
      on8sub11: "内向的",
      on8sub12: "軽薄",
      on8sub21: "悲しい",
      on8sub22: "幸せ",
      on8sub31: "面白い",
      on8sub32: "神秘的",
      // あなたの目標
      on9tit: "あなたの目標を選択してください",
      on9op1: "ロールプレイの冒険",
      on9op2: "恋愛とデート",
      on9op3: "友達と遊ぶ",
      on9op4: "孤独を感じない",
      on9op5: "楽しむ",
      // 余暇の過ごし方
      on10tit: "余暇の過ごし方は？",
      on10op1: "ゲームをプレイ",
      on10op2: "本を読む",
      on10op3: "音楽を聴く",
      on10op4: "人々と会う",
      on10op5: "一人で楽しむ",
      // 新聞
      on11tit: "すでに12,756,980人の男性と女性がAIの恩恵を体験しています",
      // 最終ローディングのレビュー
      on12rev1: "楽しいゲームを見つけました",
      on12rev2: "アプリは素晴らしく、中毒性があります",
      on12rev3: "毎日このゲームをプレイしています！",
      on12tit1: "AIフレンドの作成を最終決定",
      on12tit2: "愛情を高める",
      on12tit3: "あなたのカスタマイズを追加",
      // Revenuecat
      onrevtit: "プレミアムを取得",
      onrevop1: "無制限のチャット",
      onrevop2: "無制限のスワイプ",
      onrevop3: "無制限のプレミアムキャラクターを取得",
      onrevop4: "より速いレスポンス時間",
      onrevop5: "優先アクセス",
      onrevaccess: "たった",
      onrevannl: "年間",
      onrevmthly: "月額",
      onrevweekly: "週刊",
      onrevdis: "33% OFF",
      onrevcont: "続行",
      // ホーム
      onhtitle: "あなたのために",
      onhcat: "あなたが興味を持っているカテゴリー",
      ontoday: "今日はあなたのため",
      ontodaysub: "気に入ったストーリーに似たもの",
      ondaily: "デイリーセッション",
      ondailysub: "ユニークなものを探索",
      onfav: "お気に入りを発見",
      onfavsub: "これらは素晴らしいものです",
      ontrend: "トレンドを探索",
      ontrendsub: "トレンディなものを見つけ出す",
      onsteamy: "熱い情熱を感じる",
      onsteamysub: "ワクワクする感覚を提供します",
      // Tinderマッチ
      ontindertitle: "マッチしました",
      ontindersub: "あなたの気になる相手がメッセージを待っています",
      ontinderchat: "今すぐチャット",
      // キャラクターリスト
      onchartitle: "おすすめ",
      // チャット
      onchatitle: "注意：キャラクターが言うことはすべて創作です",
      onchatplacehlder: "メッセージを入力してください...",
      // メニュー
      chats: "チャット",
      foryou: "あなたのため",
      explore: "探索",
      gift: "ギフトフォーユー",
    getnow: "今すぐ取得",
yourgift: "あなたの贈り物",
  }
  
    
  },

  //portuguese
  pt: {
    translation: {
      // Tema
      done: "Concluído",
      skip: "Saltar",
      next: "Próximo",
      continueplaying: "Continuar a jogar",
      whatsinside: "O que está dentro?",
      // Onboarding
      wel1: "Jogue Histórias da Sua Escolha",
      sub1: "Este jogo permite soltar a imaginação com diversão",
      wel2: "Sua Personalização",
      sub2: "Garantimos que você obtenha o melhor disso",
      wel3: "Personagens Ilimitados",
      sub3: "Converse com personagens ilimitados",
      // Categoria de Jogo
      on1tit: "Por favor, escolha a categoria que você está interessado em jogar",
      on1op1: "Amor",
      on1op2: "Aventura",
      on1op3: "Romance",
      on1op4: "Diversão",
      on1op5: "Mistério",
      // Customizando a História
      on2tit: "Personalizando a História",
      // Nome
      on3tit: "Qual é o seu nome?",
      on3textname: "Digite o seu nome",
      // Idade
      on4tit: "Qual é a sua idade?",
      // Gênero
      on5tit: "Por favor, selecione o seu gênero?",
      on5op1: "Masculino",
      on5op2: "Feminino",
      on5op3: "Outro",
      // Parceiro
      on6tit: "Escolha o seu parceiro",
      // Nome do Parceiro
      on7tit: "Defina o Nome do Personagem?",
      on7subt: "Definir Nome",
      // Personalizando a Personalidade
      on8tit: "Personalize a sua Personalidade",
      on8sub11: "Tímido",
      on8sub12: "Paquerador",
      on8sub21: "Triste",
      on8sub22: "Feliz",
      on8sub31: "Engraçado",
      on8sub32: "Misterioso",
      // Seus Objetivos
      on9tit: "Selecione os Seus Objetivos?",
      on9op1: "Aventuras de Role-Play",
      on9op2: "Flerte e Encontros",
      on9op3: "Jogar com Amigos",
      on9op4: "Sentir-se Menos Solitário",
      on9op5: "Divertir-se",
      // Como Você Passa o Tempo Livre
      on10tit: "Como Você Passa o Seu Tempo Livre?",
      on10op1: "Jogar Jogos",
      on10op2: "Ler Livros",
      on10op3: "Ouvir Música",
      on10op4: "Conhecer Pessoas",
      on10op5: "Aproveitar a Solidão",
      // Jornal
      on11tit: "12,756,980 homens e mulheres já experimentaram os benefícios de ter uma IA em suas vidas",
      // Carregando Avaliações Finais
      on12rev1: "Encontrei um jogo tão divertido",
      on12rev2: "O aplicativo é incrível e viciante",
      on12rev3: "Jogando este jogo todos os dias!",
      on12tit1: "Finalizando a Criação do Amigo de IA",
      on12tit2: "Aumentando o Afeto",
      on12tit3: "Adicionando a Sua Personalização",
      // Revenuecat
      onrevtit: "Obtenha Premium",
      onrevop1: "Chat Ilimitado",
      onrevop2: "Swipes Ilimitados",
      onrevop3: "Obtenha Personagens Premium Ilimitados",
      onrevop4: "Tempos de Resposta Mais Rápidos",
      onrevop5: "Acesso Prioritário",
      onrevaccess: "Acesso total por apenas",
      onrevannl: "Anual",
      onrevmthly: "Mensal",
      onrevweekly: "Semanal",
      onrevdis: "33% DE DESCONTO",
      onrevcont: "Continuar",
      // Página Inicial
      onhtitle: "Para Você",
      onhcat: "Categorias que você está interessado",
      ontoday: "Hoje para você",
      ontodaysub: "Histórias semelhantes às que você gostou",
      ondaily: "Sessão Diária",
      ondailysub: "Explore algo único",
      onfav: "Descubra Favoritos",
      onfavsub: "Esses são incríveis",
      ontrend: "Explore as Tendências",
      ontrendsub: "Descubra as histórias em tendência",
      onsteamy: "Caliente",
      onsteamysub: "Vai dar-lhe sensações arrepiantes",
      // Combinação no Tinder
      ontindertitle: "É uma Combinação",
      ontindersub: "Sua Paquera está esperando sua mensagem",
      ontinderchat: "Conversar Agora",
      // Lista de Personagens
      onchartitle: "Recomendados",
      // Bate-papo
      onchatitle: "Lembre-se: Tudo o que os personagens dizem é inventado",
      onchatplacehlder: "Digite uma mensagem...",
      // Menu
      chats: "Conversas",
      foryou: "Para Você",
      explore: "Explorar",
      gift: "Presente para você",
    getnow: "Pegue agora",
    yourgift: "Seu Presente",
  }
  
    
  },
  //korean
  ko: {
  

    translation: {
      // 테마
      done: "완료",
      skip: "건너뛰기",
      next: "다음",
      continueplaying: "계속 플레이",
      whatsinside: "안에 뭐가 있나요?",
      // 온보딩
      wel1: "원하는 이야기 플레이",
      sub1: "이 게임은 상상력을 발휘하여 즐길 수 있습니다",
      wel2: "귀하의 맞춤화",
      sub2: "우리는 최고를 제공합니다",
      wel3: "무제한 캐릭터",
      sub3: "무제한 캐릭터와 대화",
      // 카테고리 플레이
      on1tit: "플레이하고 싶은 관심 카테고리를 선택하십시오",
      on1op1: "사랑",
      on1op2: "모험",
      on1op3: "로맨스",
      on1op4: "즐거움",
      on1op5: "미스터리",
      // 이야기 맞춤화
      on2tit: "이야기 맞춤화",
      // 이름
      on3tit: "당신의 이름은 무엇인가요?",
      on3textname: "이름을 입력하세요",
      // 나이
      on4tit: "당신의 나이는 몇 살입니까?",
      // 성별
      on5tit: "성별을 선택하세요?",
      on5op1: "남성",
      on5op2: "여성",
      on5op3: "기타",
      // 파트너
      on6tit: "파트너를 선택하세요",
      // 파트너 이름
      on7tit: "캐릭터 이름을 설정하시겠습니까?",
      on7subt: "이름 설정",
      // 개성 맞춤화
      on8tit: "귀하의 개성을 맞춤화하세요",
      on8sub11: "수줍음",
      on8sub12: "유혹적",
      on8sub21: "슬픔",
      on8sub22: "행복",
      on8sub31: "재미있는",
      on8sub32: "신비로운",
      // 목표 설정
      on9tit: "귀하의 목표를 선택하세요?",
      on9op1: "롤플레이 모험",
      on9op2: "유혹과 데이트",
      on9op3: "친구와 함께 놀기",
      on9op4: "외로움을 덜 느끼기",
      on9op5: "즐기기",
      // 여가 활용 방법
      on10tit: "여가 시간을 어떻게 보내시나요?",
      on10op1: "게임하기",
      on10op2: "책 읽기",
      on10op3: "음악 듣기",
      on10op4: "사람들 만나기",
      on10op5: "혼자 있는 것 즐기기",
      // 신문 기사
      on11tit: "이미 12,756,980 남성과 여성이 인공 지능의 혜택을 경험했습니다",
      // 마지막 로딩 리뷰
      on12rev1: "너무 재미있는 게임을 찾았어요",
      on12rev2: "이 앱은 놀랍고 중독적입니다",
      on12rev3: "매일 이 게임을 플레이합니다!",
      on12tit1: "AI 친구 생성 완료",
      on12tit2: "애정을 높이는 중",
      on12tit3: "귀하의 맞춤화 추가 중",
      // Revenuecat
      onrevtit: "프리미엄 얻기",
      onrevop1: "무제한 채팅",
      onrevop2: "무제한 스와이프",
      onrevop3: "무제한 프리미엄 캐릭터 얻기",
      onrevop4: "보다 빠른 응답 시간",
      onrevop5: "우선 접속",
      onrevaccess: "단지",
      onrevannl: "연간",
      onrevmthly: "월간",
      onrevweekly: "주간",
      onrevdis: "33% 할인",
      onrevcont: "계속",
      // 홈
      onhtitle: "당신을 위해",
      onhcat: "관심 있는 카테고리",
      ontoday: "오늘을 위한",
      ontodaysub: "좋아하는 이야기와 유사한 이야기",
      ondaily: "매일 세션",
      ondailysub: "독특한 콘텐츠 탐색",
      onfav: "즐겨찾기 발견",
      onfavsub: "이것들은 멋진 이야기입니다",
      ontrend: "트렌딩 탐색",
      ontrendsub: "트렌딩 이야기 발견",
      onsteamy: "뜨거운 스팀",
      onsteamysub: "흥분을 느끼게 해줄 것입니다",
      // 틴더 매치
      ontindertitle: "매치입니다",
      ontindersub: "귀하의 애정 상대가 귀하의 메시지를 기다리고 있습니다",
      ontinderchat: "지금 채팅하기",
      // 캐릭터 목록
      onchartitle: "추천",
      // 채팅
      onchatitle: "참고: 캐릭터가 하는 말은 모두 가상입니다",
      onchatplacehlder: "메시지를 입력하세요...",
      // 메뉴
      chats: "채팅",
      foryou: "당신을 위해",
      explore: "탐색",
      gift: "당신을 위한 선물",
      getnow: "지금 가져가세요",
      yourgift: "당신의 선물",
  }
  


  },
  //italian
  it: {
    translation: {
       

      translation: {
        // Tema
        done: "Fatto",
        skip: "Salta",
        next: "Avanti",
        continueplaying: "Continua a giocare",
        whatsinside: "Cosa c'è dentro?",
        // Onboarding
        wel1: "Gioca Storie a Tua Scelta",
        sub1: "Questo gioco ti permette di liberare la tua immaginazione in modo divertente",
        wel2: "La Tua Personalizzazione",
        sub2: "Ci assicuriamo che tu ottenga il meglio da essa",
        wel3: "Personaggi Illimitati",
        sub3: "Parla con personaggi illimitati",
        // Giocare per Categoria
        on1tit: "Per favore, scegli la categoria che ti interessa giocare",
        on1op1: "Amore",
        on1op2: "Avventura",
        on1op3: "Romance",
        on1op4: "Divertimento",
        on1op5: "Mistero",
        // Personalizzazione della Storia
        on2tit: "Personalizzazione della Storia",
        // Nome
        on3tit: "Qual è il tuo nome?",
        on3textname: "Inserisci il tuo nome",
        // Età
        on4tit: "Quanti anni hai?",
        // Genere
        on5tit: "Seleziona il tuo genere?",
        on5op1: "Maschio",
        on5op2: "Femmina",
        on5op3: "Altro",
        // Partner
        on6tit: "Scegli il tuo partner",
        // Nome del Partner
        on7tit: "Imposta il Nome del Personaggio?",
        on7subt: "Imposta Nome",
        // Personalizzazione della Personalità
        on8tit: "Personalizza la Tua Personalità",
        on8sub11: "Timido",
        on8sub12: "Flirt",
        on8sub21: "Triste",
        on8sub22: "Felice",
        on8sub31: "Divertente",
        on8sub32: "Misterioso",
        // I Tuoi Obiettivi
        on9tit: "Seleziona i Tuoi Obiettivi?",
        on9op1: "Avventure di Gioco di Ruolo",
        on9op2: "Flirt e Appuntamenti",
        on9op3: "Gioca con gli Amici",
        on9op4: "Sentirsi Meno Soli",
        on9op5: "Divertirsi",
        // Come Trascorri il Tempo Libero
        on10tit: "Come Trascorri il Tuo Tempo Libero?",
        on10op1: "Gioca ai Giochi",
        on10op2: "Leggi Libri",
        on10op3: "Ascolta Musica",
        on10op4: "Incontra Persone",
        on10op5: "Goditi la Solitudine",
        // Giornale
        on11tit: "Già 12.756.980 uomini e donne hanno sperimentato i vantaggi di avere un'IA nella loro vita",
        // Caricamento Recensioni Finali
        on12rev1: "Ho trovato un gioco così divertente",
        on12rev2: "L'app è incredibile e coinvolgente",
        on12rev3: "Gioco a questo gioco ogni giorno!",
        on12tit1: "Finalizzazione della Creazione dell'Amico IA",
        on12tit2: "Aumento dell'Affetto",
        on12tit3: "Aggiunta della Tua Personalizzazione",
        // Revenuecat
        onrevtit: "Ottieni Premium",
        onrevop1: "Chat Illimitate",
        onrevop2: "Swipes Illimitati",
        onrevop3: "Ottieni Personaggi Premium Illimitati",
        onrevop4: "Tempi di Risposta Più Veloci",
        onrevop5: "Accesso Prioritario",
        onrevaccess: "Accesso completo per soli",
        onrevannl: "Annuale",
        onrevmthly: "Mensile",
        onrevweekly: "Settimanale",
        onrevdis: "Sconto del 33%",
        onrevcont: "Continua",
        // Home
        onhtitle: "Per Te",
        onhcat: "Categorie di tuo interesse",
        ontoday: "Oggi per te",
        ontodaysub: "Storie simili a quelle che ti sono piaciute",
        ondaily: "Sessione Giornaliera",
        ondailysub: "Esplora qualcosa di unico",
        onfav: "Scopri i Preferiti",
        onfavsub: "Questi sono fantastici",
        ontrend: "Esplora le Tendenze",
        ontrendsub: "Scopri le storie in tendenza",
        onsteamy: "Caldo Piccante",
        onsteamysub: "Ti darà sensazioni elettrizzanti",
        // Match su Tinder
        ontindertitle: "È un Match",
        ontindersub: "Il tuo Interesse è in attesa del tuo messaggio",
        ontinderchat: "Chatta Ora",
        // Lista dei Personaggi
        onchartitle: "Consigliati",
        // Chat
        onchatitle: "Ricorda: Tutto ciò che dicono i personaggi è frutto di fantasia",
        onchatplacehlder: "Digita un messaggio...",
        // Menu
        chats: "Chat",
        foryou: "Per te",
        explore: "Esplora",
        gift: "Regalo per te",
    getnow: "Prendilo ora",
    yourgift: "Il Tuo Regalo",




    }
    
   
    },
    
  },
  //dutch
  nl: {
    translation: {
      // Thema
      done: "Klaar",
      skip: "Overslaan",
      next: "Volgende",
      continueplaying: "Doorgaan met spelen",
      whatsinside: "Wat zit erin?",
      // Onboarding
      wel1: "Speel verhalen naar keuze",
      sub1: "Dit spel laat je je verbeelding de vrije loop met plezier",
      wel2: "Jouw personalisatie",
      sub2: "We zorgen ervoor dat je er het beste uit haalt",
      wel3: "Onbeperkte personages",
      sub3: "Praat met onbeperkte personages",
      // Categorie spelen
      on1tit: "Kies alsjeblieft de categorie waarin je geïnteresseerd bent om te spelen",
      on1op1: "Liefde",
      on1op2: "Avontuur",
      on1op3: "Romantiek",
      on1op4: "Plezier",
      on1op5: "Mysterie",
      // Aanpassing van het verhaal
      on2tit: "Verhaal aanpassen",
      // Naam
      on3tit: "Jouw naam?",
      on3textname: "Voer jouw naam in",
      // Leeftijd
      on4tit: "Jouw leeftijd?",
      // Geslacht
      on5tit: "Kies jouw geslacht?",
      on5op1: "Man",
      on5op2: "Vrouw",
      on5op3: "Anders",
      // Partner
      on6tit: "Kies jouw partner",
      // Partner naam
      on7tit: "Stel karakternaam in?",
      on7subt: "Naam instellen",
      // Personalisatie van persoonlijkheid
      on8tit: "Pas jouw persoonlijkheid aan",
      on8sub11: "Verlegen",
      on8sub12: "Flirterig",
      on8sub21: "Bedroefd",
      on8sub22: "Blij",
      on8sub31: "Grappig",
      on8sub32: "Mysterieus",
      // Jouw doelen
      on9tit: "Selecteer jouw doelen?",
      on9op1: "Rolspelavonturen",
      on9op2: "Flirten en daten",
      on9op3: "Spelen met vrienden",
      on9op4: "Minder eenzaam voelen",
      on9op5: "Plezier hebben",
      // Vrije tijd besteden
      on10tit: "Hoe besteed je jouw vrije tijd?",
      on10op1: "Spelletjes spelen",
      on10op2: "Boeken lezen",
      on10op3: "Muziek luisteren",
      on10op4: "Mensen ontmoeten",
      on10op5: "Alleen genieten",
      // Krant
      on11tit: "12.756.980 mannen en vrouwen hebben al ervaren wat het betekent om een AI in hun leven te hebben",
      // Laatste laden van beoordelingen
      on12rev1: "Ik heb een spel gevonden dat zo leuk is",
      on12rev2: "De app is geweldig en verslavend",
      on12rev3: "Ik speel dit spel elke dag!",
      on12tit1: "Het afronden van de creatie van de AI-vriend",
      on12tit2: "Het versterken van genegenheid",
      on12tit3: "Jouw personalisatie toevoegen",
      // Revenuecat
      onrevtit: "Krijg Premium",
      onrevop1: "Onbeperkt chatten",
      onrevop2: "Onbeperkte swipes",
      onrevop3: "Krijg onbeperkt premium personages",
      onrevop4: "Snellere responstijden",
      onrevop5: "Voorrangstoegang",
      onrevaccess: "Volledige toegang voor slechts",
      onrevannl: "Jaarlijks",
      onrevmthly: "Maandelijks",
      onrevweekly: "Wekelijks",
      onrevdis: "33% KORTING",
      onrevcont: "Doorgaan",
      // Thuis
      onhtitle: "Voor jou",
      onhcat: "Categorieën waarin je geïnteresseerd bent",
      ontoday: "Vandaag voor jou",
      ontodaysub: "Vergelijkbare verhalen met degene die je leuk vond",
      ondaily: "Dagelijkse sessie",
      ondailysub: "Verken iets heel unieks",
      onfav: "Ontdek favorieten",
      onfavsub: "Dit zijn geweldige keuzes",
      ontrend: "Verken trends",
      ontrendsub: "Ontdek wat er trending is",
      onsteamy: "Stoom Roodheet",
      onsteamysub: "Zal je tintelende zintuigen geven",
      // Tinder-match
      ontindertitle: "Het is een Match",
      ontindersub: "Jouw Crush wacht op jouw bericht",
      ontinderchat: "Nu chatten",
      // Aanbevolen personages
      onchartitle: "Aanbevolen",
      // Chat
      onchatitle: "Onthoud: Alles wat de personages zeggen is verzonnen",
      onchatplacehlder: "Typ een bericht...",
      // Menu
      chats: "Chats",
      foryou: "Voor jou",
      explore: "Verken",
      gift: "Cadeau voor jou",
      getnow: "Haal het nu op",
      yourgift: "Jouw Cadeau",



  }
  
    
  },

  //polish
  pl: {
    translation: {
      // Motyw
      done: "Gotowe",
      skip: "Pomiń",
      next: "Następne",
      continueplaying: "Kontynuuj grę",
      whatsinside: "Co w środku?",
      // Wprowadzenie
      wel1: "Graj w wybrane opowieści",
      sub1: "Ta gra pozwala uwolnić wyobraźnię z zabawą",
      wel2: "Twoja personalizacja",
      sub2: "Dbamy, żebyś uzyskał(a) najlepsze efekty",
      wel3: "Nieograniczone postacie",
      sub3: "Rozmawiaj z nieograniczonymi postaciami",
      // Gra w kategorie
      on1tit: "Proszę wybierz kategorię, która cię interesuje",
      on1op1: "Miłość",
      on1op2: "Przygoda",
      on1op3: "Romans",
      on1op4: "Rozrywka",
      on1op5: "Misterium",
      // Dostosowanie opowieści
      on2tit: "Dostosuj opowieść",
      // Imię
      on3tit: "Twoje imię?",
      on3textname: "Wprowadź swoje imię",
      // Wiek
      on4tit: "Twój wiek?",
      // Płeć
      on5tit: "Proszę wybierz swoją płeć?",
      on5op1: "Mężczyzna",
      on5op2: "Kobieta",
      on5op3: "Inne",
      // Partner
      on6tit: "Wybierz swojego partnera",
      // Imię partnera
      on7tit: "Ustaw imię postaci?",
      on7subt: "Ustaw imię",
      // Personalizacja osobowości
      on8tit: "Dostosuj swoją osobowość",
      on8sub11: "Nieśmiały",
      on8sub12: "Flirciarz/Flirciara",
      on8sub21: "Smutny",
      on8sub22: "Szczęśliwy/Szczęśliwa",
      on8sub31: "Śmieszny/Śmieszna",
      on8sub32: "Tajemniczy/Tajemnicza",
      // Twoje cele
      on9tit: "Wybierz swoje cele?",
      on9op1: "Przygody w gry fabularne",
      on9op2: "Flirt i randki",
      on9op3: "Gra z przyjaciółmi",
      on9op4: "Mniej poczucia samotności",
      on9op5: "Zabawa",
      // Jak spędzasz wolny czas
      on10tit: "Jak spędzasz swój wolny czas?",
      on10op1: "Gry komputerowe",
      on10op2: "Czytanie książek",
      on10op3: "Słuchanie muzyki",
      on10op4: "Spotykanie ludzi",
      on10op5: "Cieszysz się byciem sam/sama",
      // Gazeta
      on11tit: "Już 12 756 980 mężczyzn i kobiet doświadczyło korzyści z posiadania sztucznej inteligencji w swoim życiu",
      // Ostateczne wczytywanie recenzji
      on12rev1: "Znalazłem grę, która jest tak dużo zabawy",
      on12rev2: "Ta aplikacja jest niesamowita i uzależniająca",
      on12rev3: "Grając w tę grę codziennie!",
      on12tit1: "Finalizowanie stworzenia przyjaciela AI",
      on12tit2: "Wzmacnianie uczuć",
      on12tit3: "Dodawanie swojej personalizacji",
      // Revenuecat
      onrevtit: "Otrzymaj Premium",
      onrevop1: "Nieograniczony czat",
      onrevop2: "Nieograniczone swipy",
      onrevop3: "Otrzymaj nieograniczone postacie premium",
      onrevop4: "Szybsze czasy odpowiedzi",
      onrevop5: "Priorytetowy dostęp",
      onrevaccess: "Pełny dostęp za jedyne",
      onrevannl: "Rocznie",
      onrevmthly: "Miesięcznie",
      onrevweekly: "Tygodniowo",
      onrevdis: "33% RABAT",
      onrevcont: "Kontynuuj",
      // Strona główna
      onhtitle: "Dla Ciebie",
      onhcat: "Kategorie, które Cię interesują",
      ontoday: "Dziś dla Ciebie",
      ontodaysub: "Podobne historie do tych, które Ci się podobały",
      ondaily: "Codzienna sesja",
      ondailysub: "Odkryj coś naprawdę wyjątkowego",
      onfav: "Odkryj ulubione",
      onfavsub: "To są niesamowite historie",
      ontrend: "Odkrywaj trendy",
      ontrendsub: "Znajdź opowieści, które są w trendach",
      onsteamy: "Gorąca Zabawa",
      onsteamysub: "Przyprawi cię o dreszcze",
      // Zderzenie na Tinderze
      ontindertitle: "To jest Zderzenie",
      ontindersub: "Twój Zgoda czeka na twoją wiadomość",
      ontinderchat: "Teraz porozmawiaj",
      // Lista postaci
      onchartitle: "Polecane",
      // Czat
      onchatitle: "Pamiętaj: Wszystko, co mówią postacie, jest wymyślone",
      onchatplacehlder: "Wpisz wiadomość...",
      // Menu
      chats: "Czaty",
      foryou: "Dla ciebie",
      explore: "Eksploruj",
      gift: "Prezent dla ciebie",
      getnow: "Weź teraz",
      yourgift: "Twoj prezent",
  }
  
    
  },
  th: {
    translation: {
      // ธีม
      done: "เสร็จสิ้น",
      skip: "ข้าม",
      next: "ถัดไป",
      continueplaying: "ดำเนินการเล่น",
      whatsinside: "มีอะไรอยู่ด้านใน?",
      // การเริ่มต้น
      wel1: "เล่นเรื่องราวตามที่คุณต้องการ",
      sub1: "เกมนี้ช่วยให้คุณปลดปล่อยจินตนาการของคุณไปในทิศทางที่สนุกสนาน",
      wel2: "การปรับแต่งส่วนตัวของคุณ",
      sub2: "เราทำให้คุณได้สิ่งที่ดีที่สุดจากมัน",
      wel3: "ตัวละครไม่จำกัด",
      sub3: "คุยกับตัวละครไม่จำกัด",
      // เล่นตามหมวดหมู่
      on1tit: "โปรดเลือกหมวดหมู่ที่คุณสนใจเล่น",
      on1op1: "ความรัก",
      on1op2: "ผจญภัย",
      on1op3: "โรแมนติก",
      on1op4: "สนุกสนาน",
      on1op5: "ลึกลับ",
      // ปรับแต่งเรื่องราว
      on2tit: "ปรับแต่งเรื่องราว",
      // ชื่อ
      on3tit: "ชื่อของคุณ?",
      on3textname: "กรอกชื่อของคุณ",
      // อายุ
      on4tit: "อายุของคุณ?",
      // เพศ
      on5tit: "โปรดเลือกเพศของคุณ?",
      on5op1: "ชาย",
      on5op2: "หญิง",
      on5op3: "อื่น ๆ",
      // พาร์ทเนอร์
      on6tit: "เลือกพาร์ทเนอร์ของคุณ",
      // ชื่อพาร์ทเนอร์
      on7tit: "ตั้งชื่อตัวละคร?",
      on7subt: "ตั้งชื่อ",
      // ปรับแต่งบุคลิกภาพ
      on8tit: "ปรับแต่งบุคลิกภาพของคุณ",
      on8sub11: "อายุรกรรม",
      on8sub12: "น่าสนใจ",
      on8sub21: "เศร้า",
      on8sub22: "มีความสุข",
      on8sub31: "ตลก",
      on8sub32: "ลึกลับ",
      // จุดมุ่งหมายของคุณ
      on9tit: "เลือกจุดมุ่งหมายของคุณ?",
      on9op1: "ผจญภัยบทบาท",
      on9op2: "ส่งสวัสดีและนัดหมาย",
      on9op3: "เล่นกับเพื่อน",
      on9op4: "รู้สึกไม่เหงา",
      on9op5: "สนุกสนาน",
      // การใช้เวลาว่าง
      on10tit: "คุณใช้เวลาว่างอย่างไร?",
      on10op1: "เล่นเกม",
      on10op2: "อ่านหนังสือ",
      on10op3: "ฟังเพลง",
      on10op4: "พบคน",
      on10op5: "สนุกกับความเงียบๆ",
      // ข่าวสาร
      on11tit: "มีผู้ชายและผู้หญิง 12,756,980 คนได้รับประสบการณ์ผลประโยชน์จากการมี AI ในชีวิตของพวกเขาแล้ว",
      // การโหลดรีวิวสุดท้าย
      on12rev1: "ค้นพบเกมที่สนุกมาก",
      on12rev2: "แอปนี้น่าทึ่งและทำให้ติดใจ",
      on12rev3: "เล่นเกมนี้ทุกวัน!",
      on12tit1: "การสร้างเพื่อน AI ของคุณให้เสร็จสิ้น",
      on12tit2: "เพิ่มความรัก",
      on12tit3: "เพิ่มการปรับแต่งของคุณ",
      // Revenuecat
      onrevtit: "รับพรีเมี่ยม",
      onrevop1: "แชทไม่จำกัด",
      onrevop2: "สไวป์ไม่จำกัด",
      onrevop3: "รับตัวละครพรีเมี่ยมไม่จำกัด",
      onrevop4: "เวลารอคำตอบเร็วขึ้น",
      onrevop5: "การเข้าถึงแบบลำดับความสำคัญ",
      onrevaccess: "การเข้าถึงทั้งหมดเพียง",
      onrevannl: "รายปี",
      onrevmthly: "รายเดือน",
      onrevweekly: "รายสัปดาห์",
      onrevdis: "ลดราคา 33%",
      onrevcont: "ดำเนินการ",
      // หน้าหลัก
      onhtitle: "สำหรับคุณ",
      onhcat: "หมวดหมู่ที่คุณสนใจ",
      ontoday: "วันนี้สำหรับคุณ",
      ontodaysub: "เรื่องราวที่คล้ายกับที่คุณชอบ",
      ondaily: "เซสชันประจำวัน",
      ondailysub: "สำรวจสิ่งที่ไม่เหมือนใคร",
      onfav: "ค้นพบเรื่องโปรด",
      onfavsub: "เหล่านี้เป็นเรื่องที่น่าทึ่ง",
      ontrend: "สำรวจเรื่องที่มีแนวโน้ม",
      ontrendsub: "ค้นหาเรื่องที่กำลังมีแนวโน้ม",
      onsteamy: "เรื่องร้อนแรง",
      onsteamysub: "จะทำให้คุณรู้สึกตื่นเต้น",
      // การจับคู่บน Tinder
      ontindertitle: "มันคือการจับคู่",
      ontindersub: "คนที่คุณชอบรอให้คุณส่งข้อความ",
      ontinderchat: "พูดคุยตอนนี้",
      // รายการตัวละคร
      onchartitle: "แนะนำ",
      // แชท
      onchatitle: "จำไว้: ทุกอย่างที่ตัวละครพูดคือสร้างขึ้น",
      onchatplacehlder: "พิมพ์ข้อความ...",
      // เมนู
      chats: "แชท",
      foryou: "สำหรับคุณ",
      explore: "สำรวจ",
      gift: "ของขวัญสำหรับคุณ",
      getnow: "รับเลย",
      yourgift: "ของขวัญของคุณ",


  }
  
  
    
  },
  bn: {
    translation: {
      // থিম
      done: "সম্পন্ন",
      skip: "স্কিপ করুন",
      next: "পরবর্তী",
      continueplaying: "খেলা চালান",
      whatsinside: "কি আছে?",
      // অনবোর্ডিং
      wel1: "আপনার পছন্দের গল্প খেলুন",
      sub1: "এই খেলটি আপনার উপাদানগুলি আপনার মজার দিকে দৌড়াতে দেয়",
      wel2: "আপনার ব্যক্তিগতকরণ",
      sub2: "আমরা নিশ্চিত করি আপনি এর সেরা প্রাপ্ত করেন",
      wel3: "সীমিত ব্যক্তিত্ব",
      sub3: "অসীম ব্যক্তিগুলির সাথে কথা বলুন",
      // বিভাগ খেলা
      on1tit: "দয়া করে খেলার বিভাগ চয়ন করুন",
      on1op1: "ভালোবাসা",
      on1op2: "সাহস",
      on1op3: "রোমান্স",
      on1op4: "মজার",
      on1op5: "রহস্য",
      // কাস্টমাইজিং স্টোরি
      on2tit: "গল্প কাস্টমাইজ করুন",
      // নাম
      on3tit: "আপনার নাম?",
      on3textname: "আপনার নাম লিখুন",
      // বয়স
      on4tit: "আপনার বয়স?",
      // লিঙ্গ
      on5tit: "দয়া করে আপনার লিঙ্গ চয়ন করুন?",
      on5op1: "পুরুষ",
      on5op2: "নারী",
      on5op3: "অন্যান্য",
      // সঙ্গী
      on6tit: "আপনি আপনার সঙ্গী চয়ন করুন",
      // সঙ্গীর নাম
      on7tit: "চরিত্রের নাম নির্ধারণ করুন?",
      on7subt: "নাম নির্ধারণ করুন",
      // ব্যক্তিত্ব কাস্টমাইজ
      on8tit: "আপনার ব্যক্তিত্ব কাস্টমাইজ করুন",
      on8sub11: "স্বাভাবিক",
      on8sub12: "ফ্লার্টি",
      on8sub21: "দু: খিত",
      on8sub22: "আনন্দিত",
      on8sub31: "মজার",
      on8sub32: "রহস্যময়",
      // আপনার লক্ষ্য
      on9tit: "আপনার লক্ষ্য চয়ন করুন?",
      on9op1: "রোল-প্লে সাহস",
      on9op2: "প্রেম এবং দিন",
      on9op3: "বন্ধুদের সাথে খেলা",
      on9op4: "কম একাকি অনুভব করা",
      on9op5: "মজা করা",
      // ফ্রী সময় কীভাবে কাটানো হয়
      on10tit: "আপনি কীভাবে আপনার ফ্রী সময় কাটান?",
      on10op1: "খেলা খুব পছন্দ করি",
      on10op2: "বই পড়া",
      on10op3: "সঙ্গীত শোনা",
      on10op4: "মানুষের সাথে মিলা",
      on10op5: "একক থাকতে আনন্দ করা",
      // সংবাদপত্র
      on11tit: "12,756,980 পুরুষ এবং মহিলা ইতিমধ্যে একটি AI-র সাথে অধিকার অদয় অধিকার অধিকার অধিকার অধিকার",
      // চূড়ান্ত লোডিং পর্যালোচনা
      on12rev1: "একটি খেলা পেয়েছি যা খুব মজার",
      on12rev2: "অ্যাপটি আমাজিং এবং আসক্তিকর",
      on12rev3: "এই খেলটি প্রতিদিন খেলি!",
      on12tit1: "শেষ AI বন্ধু সৃষ্টি করা হচ্ছে",
      on12tit2: "স্নেহ বাড়ানো হচ্ছে",
      on12tit3: "আপনার ব্যক্তিগতকরণ যোগ করা হচ্ছে",
      // Revenuecat
      onrevtit: "প্রিমিয়াম প্রাপ্ত করুন",
      onrevop1: "অসীম চ্যাট",
      onrevop2: "অসীম স্যাইপ",
      onrevop3: "অসীম প্রিমিয়াম চরিত্র",
      onrevop4: "দ্রুত সাড়া সময়",
      onrevop5: "অগ্রাধিকার অ্যাক্সেস",
      onrevaccess: "মাত্র সম্পূর্ণ অ্যাক্সেস পেতে",
      onrevannl: "বার্ষিক",
      onrevmthly: "মাসিক",
      onrevweekly: "সাপ্তাহিক",
      onrevdis: "33% মূল্যবান",
      onrevcont: "চালিয়ে যান",
      // হোম
      onhtitle: "আপনার জন্য",
      onhcat: "আপনি আগ্রহ রাখেন বিভাগগুলি",
      ontoday: "আজ আপনার জন্য",
      ontodaysub: "আপনি পছন্দ করেন সেসব গল্পের মত",
      ondaily: "দৈনিক অধিবাস",
      ondailysub: "কিছু সম্পূর্ণ অদ্ভুত অনুসন্ধান করুন",
      onfav: "প্রিয় আবিষ্কার করুন",
      onfavsub: "এগুলি অবিশ্যই আমেজিং",
      ontrend: "ট্রেন্ডিং অন্বেষণ করুন",
      ontrendsub: "ট্রেন্ডিং অদ্ভুত বের করুন",
      onsteamy: "জ্বলন্ত সাদা সাদো",
      onsteamysub: "আপনি অনুভব করবেন টিংকলি অবস্থা",
      // টিন্ডার ম্যাচ
      ontindertitle: "এটি একটি ম্যাচ",
      ontindersub: "আপনার প্রেমিক আপনার বার্তা পেতে অপেক্ষা করছে",
      ontinderchat: "এখন চ্যাট করুন",
      // চরিত্রের তালিকা
      onchartitle: "সুপারিশ",
      // চ্যাট
      onchatitle: "মন্ত্রণা করুন: চরিত্ররা সব কথা মিথ্যা",
      onchatplacehlder: "একটি বার্তা টাইপ করুন...",
      // মেনু
      chats: "চ্যাট",
      foryou: "আপনার জন্য",
      explore: "অন্বেষণ করুন",
      gift: "আপনার জন্য উপহার",
      getnow: "এখন পেতে",
      yourgift: "আপনার উপহার",
    },
  },
  
  
    
  bg: {
    translation: {
        // Тема
        done: "Готово",
        skip: "Пропусни",
        next: "Следващ",
        continueplaying: "Продължи с играта",
        whatsinside: "Какво има вътре?",
        // Поддържащи информация
        wel1: "Играйте истории по ваш избор",
        sub1: "Тази игра ви позволява да разгоните въображението си със забавление",
        wel2: "Вашият персонален стил",
        sub2: "Ние се грижим да получите най-доброто от това",
        wel3: "Неограничено количество герои",
        sub3: "Разговаряйте с неограничено герои",
        // Избор на категория за игра
        on1tit: "Моля, изберете категорията, в която искате да играете",
        on1op1: "Любов",
        on1op2: "Приключение",
        on1op3: "Романтика",
        on1op4: "Забавление",
        on1op5: "Мистерия",
        // Персонализация на историята
        on2tit: "Персонализиране на историята",
        // Име
        on3tit: "Вашето име?",
        on3textname: "Въведете вашето име",
        // Възраст
        on4tit: "Вашата възраст?",
        // Пол
        on5tit: "Моля, изберете вашия пол?",
        on5op1: "Мъж",
        on5op2: "Жена",
        on5op3: "Друг",
        // Избор на партньор
        on6tit: "Изберете своя партньор",
        // Име на партньора
        on7tit: "Задайте име на героя",
        on7subt: "Задайте име",
        // Персонализиране на характера
        on8tit: "Персонализирайте своя характер",
        on8sub11: "Срамежлив",
        on8sub12: "Флиртуващ",
        on8sub21: "Тъжен",
        on8sub22: "Щастлив",
        on8sub31: "Смешен",
        on8sub32: "Мистериозен",
        // Ваши цели
        on9tit: "Изберете ваши цели?",
        on9op1: "Приключения в ролята на герой",
        on9op2: "Флиртувайте и срещайте се",
        on9op3: "Играйте с приятели",
        on9op4: "Почувствайте се по-малко самотни",
        on9op5: "Забавлявайте се",
        // Как прекарвате свободното си време
        on10tit: "Как прекарвате свободното си време?",
        on10op1: "Играете игри",
        on10op2: "Четете книги",
        on10op3: "Слушате музика",
        on10op4: "Срещате хора",
        on10op5: "Се наслаждавате на самотата",
        // Вестник
        on11tit: "12 756 980 мъже и жени вече са изпитали предимствата от наличието на изкуствен интелект в живота си",
        // Зареждане на отзиви
        on12rev1: "Открих игра, която е толкова забавна",
        on12rev2: "Приложението е страхотно и възбуждащо",
        on12rev3: "Играя тази игра всеки ден!",
        on12tit1: "Завършване на създаването на изкуствен интелект приятел",
        on12tit2: "Увеличаване на привързаността",
        on12tit3: "Добавяне на вашата персонализация",
        // Revenuecat
        onrevtit: "Вземете премиум",
        onrevop1: "Неограничен чат",
        onrevop2: "Неограничени плъзгания",
        onrevop3: "Вземете неограничено премиум персонажи",
        onrevop4: "По-бързо време за отговор",
        onrevop5: "Приоритетен достъп",
        onrevaccess: "Пълен достъп само за",
        onrevannl: "Годишно",
        onrevmthly: "Месечно",
        onrevweekly: "Седмично",
        onrevdis: "33% НАМАЛЕНИЕ",
        onrevcont: "Продължи",
        // Начало
        onhtitle: "За вас",
        onhcat: "Категории, които ви интересуват",
        ontoday: "Днес за вас",
        ontodaysub: "Подобни истории на тези, които харесахте",
        ondaily: "Ежедневна сесия",
        ondailysub: "Изследвайте нещо уникално",
        onfav: "Открийте любими",
        onfavsub: "Тези са страхотни",
        ontrend: "Изследвайте тенденции",
        ontrendsub: "Научете се за тенденциите",
        onsteamy: "Поразителни страсти",
        onsteamysub: "Ще ви донесе тръпки",
        // Tinder мач
        ontindertitle: "Това е мач",
        ontindersub: "Вашият актьор ви очаква със съобщение",
        ontinderchat: "Чат сега",
        // Списък с герои
        onchartitle: "Препоръчано",
        // Чат
        onchatitle: "Запомнете: Всичко, което героите казват, е измислено",
        onchatplacehlder: "Въведете съобщение...",
        // Меню
        chats: "Чатове",
        foryou: "За вас",
        explore: "Изследвай",
        gift: "Подарък за вас",
        getnow: "Вземи го сега",
        yourgift: "Вашият подарък",
    },
},

zh: {
  translation: {
    //主题
    done: "完成",
    skip: "跳过",
    next: "下一个",
    continueplaying: "继续游戏",
    whatsinside: "里面有什么?",
    //入门
    wel1: "玩您选择的故事",
    sub1: "这个游戏可以让您尽情发挥想象力",
    wel2: "个性化定制",
    sub2: "我们确保您能得到最好的体验",
    wel3: "无限角色",
    sub3: "与无限的角色交谈",
    //类别游戏
    on1tit: "请选择您感兴趣的类别",
    on1op1: "爱情",
    on1op2: "冒险",
    on1op3: "浪漫",
    on1op4: "有趣",
    on1op5: "神秘",
    //自定义故事
    on2tit: "自定义故事",
    //名字
    on3tit: "您的姓名?",
    on3textname: "输入您的姓名",
    //年龄
    on4tit: "您的年龄?",
    //性别
    on5tit: "请选择您的性别?",
    on5op1: "男",
    on5op2: "女",
    on5op3: "其他",
    //伙伴
    on6tit: "选择您的伙伴",
    //伙伴名字
    on7tit: "设置角色姓名?",
    on7subt: "设置姓名",
    //个性化定制
    on8tit: "个性化您的性格",
    on8sub11: "害羞",
    on8sub12: "轻浮",
    on8sub21: "伤心",
    on8sub22: "开心",
    on8sub31: "幽默",
    on8sub32: "神秘",
    //您的目标
    on9tit: "选择您的目标?",
    on9op1: "角色扮演冒险",
    on9op2: "恋爱和约会",
    on9op3: "与朋友玩耍",
    on9op4: "减少孤独感",
    on9op5: "享受乐趣",
    //如何度过空闲时间
    on10tit: "您如何度过空闲时间?",
    on10op1: "玩游戏",
    on10op2: "阅读书籍",
    on10op3: "听音乐",
    on10op4: "认识人们",
    on10op5: "享受独处",
    //新闻
    on11tit: "已有12,756,980名男性和女性体验了拥有AI伙伴的好处",
    //最终加载评论
    on12rev1: "发现一个非常有趣的游戏",
    on12rev2: "这个应用程序令人惊叹且让人上瘾",
    on12rev3: "每天都玩这个游戏!",
    on12tit1: "正在完成AI伙伴的创建",
    on12tit2: "增加亲密度",
    on12tit3: "添加您的个性化",
    //Revenuecat
    onrevtit: "获取高级版",
    onrevop1: "无限聊天",
    onrevop2: "无限滑动",
    onrevop3: "获取无限高级角色",
    onrevop4: "更快的响应时间",
    onrevop5: "优先访问",
    onrevaccess: "仅需全面访问",
    onrevannl: "年度",
    onrevmthly: "每月",
    onrevweekly: "每周",
    onrevdis: "33% OFF",
    onrevcont: "继续",
    //主页
    onhtitle: "为您",
    onhcat: "您感兴趣的类别",
    ontoday: "今天为您",
    ontodaysub: "与您喜欢的故事相似的故事",
    ondaily: "每日会话",
    ondailysub: "探索独特的东西",
    onfav: "发现最爱",
    onfavsub: "这些都是很棒的故事",
    ontrend: "探索热门",
    ontrendsub: "发现热门的故事",
    onsteamy: "火辣红",
    onsteamysub: "会让您有刺激的感觉",
    //tindermatch
    ontindertitle: "匹配成功",
    ontindersub: "您的心上人正在等待您的消息",
    ontinderchat: "现在聊天",
    //characterlist
    onchartitle: "推荐",
    //聊天
    onchatitle: "请记住: 所有角色说的都是虚构的",
    onchatplacehlder: "输入消息...",
    //菜单
    chats: "聊天",
    foryou: "为您",
    explore: "探索",
    gift: "送给您的礼物",
    getnow: "立即获取",
    yourgift: "您的礼物"
  }
}
,
hr: {
  translation: {
      // Tema
      done: "Gotovo",
      skip: "Preskoči",
      next: "Sljedeće",
      continueplaying: "Nastavi igrati",
      whatsinside: "Što je unutra?",
      // Onboarding
      wel1: "Igrajte priče po svojem izboru",
      sub1: "Ova igra vam omogućava da pustite maštu na volju uz zabavu",
      wel2: "Vaša personalizacija",
      sub2: "Brinemo se da dobijete najbolje od toga",
      wel3: "Neograničeni likovi",
      sub3: "Razgovarajte s neograničenim brojem likova",
      // Kategorija igranja
      on1tit: "Molimo odaberite kategoriju koja vas zanima za igranje",
      on1op1: "Ljubav",
      on1op2: "Avantura",
      on1op3: "Romansa",
      on1op4: "Zabava",
      on1op5: "Misterija",
      // Prilagodi broj
      on2tit: "Prilagodi priču",
      // Ime
      on3tit: "Vaše ime?",
      on3textname: "Unesite svoje ime",
      // Dob
      on4tit: "Vaša dob?",
      // Spol
      on5tit: "Molimo odaberite svoj spol?",
      on5op1: "Muško",
      on5op2: "Žensko",
      on5op3: "Drugo",
      // Partner
      on6tit: "Izaberite svog partnera",
      // Ime partnera
      on7tit: "Postavite ime lika?",
      on7subt: "Postavite ime",
      // Prilagodi osobnost
      on8tit: "Prilagodite svoju osobnost",
      on8sub11: "Stidljiv",
      on8sub12: "Flertujući",
      on8sub21: "Tužan",
      on8sub22: "Sretan",
      on8sub31: "Smiješan",
      on8sub32: "Misteriozan",
      // Vaši ciljevi
      on9tit: "Odaberite svoje ciljeve?",
      on9op1: "Avanture u ulozi",
      on9op2: "Flert i izlasci",
      on9op3: "Igrajte s prijateljima",
      on9op4: "Osjećajte se manje usamljeno",
      on9op5: "Zabava",
      // Kako provodite slobodno vrijeme
      on10tit: "Kako provodite svoje slobodno vrijeme?",
      on10op1: "Igranje igara",
      on10op2: "Čitanje knjiga",
      on10op3: "Slušanje glazbe",
      on10op4: "Upoznavanje ljudi",
      on10op5: "Uživanje u samoći",
      // Novine
      on11tit: "12.756.980 muškaraca i žena već je doživjelo koristi od prisustva AI u svojem životu",
      // Završno učitavanje recenzija
      on12rev1: "Pronašao sam igru koja je tako zabavna",
      on12rev2: "Aplikacija je sjajna i zarazna",
      on12rev3: "Igram ovu igru svaki dan!",
      on12tit1: "Završetak stvaranja AI prijatelja",
      on12tit2: "Povećanje naklonosti",
      on12tit3: "Dodavanje vaše personalizacije",
      // Revenuecat
      onrevtit: "Dobijte Premium",
      onrevop1: "Neograničen chat",
      onrevop2: "Neograničeni pokreti prsta",
      onrevop3: "Dobijte neograničeno premium likova",
      onrevop4: "Brže vrijeme odgovora",
      onrevop5: "Prioritetni pristup",
      onrevaccess: "Puni pristup za samo",
      onrevannl: "Godišnje",
      onrevmthly: "Mjesečno",
      onrevweekly: "Tjedno",
      onrevdis: "33% POPUST",
      onrevcont: "Nastavite",
      // Početna stranica
      onhtitle: "Za tebe",
      onhcat: "Kategorije koje vas zanimaju",
      ontoday: "Danas za vas",
      ontodaysub: "Slične priče kao one koje ste voljeli",
      ondaily: "Dnevna sesija",
      ondailysub: "Istražite nešto potpuno jedinstveno",
      onfav: "Otkrijte favorite",
      onfavsub: "Ovo su sjajne priče",
      ontrend: "Istražite trendove",
      ontrendsub: "Saznajte koji su trenutno popularni",
      onsteamy: "Parna crvena vruća",
      onsteamysub: "Dati će vam trnce",
      // Tinder Match
      ontindertitle: "It's a Match",
      ontindersub: "Vaša simpatija čeka vašu poruku",
      ontinderchat: "Chataj sada",
      // Lista likova
      onchartitle: "Preporučeno",
      // Chat
      onchatitle: "Zapamtite: Sve što likovi govore je izmišljeno",
      onchatplacehlder: "Upišite poruku...",
      // Izbornik
      chats: "Razgovori",
      foryou: "Za tebe",
      explore: "Istražuj",
      gift: "Poklon za tebe",
      getnow: "Dohvati ga sada",
      yourgift: "Tvoj poklon",
  },
},
cs: {
  translation: {
    // Téma
    done: "Hotovo",
    skip: "Přeskočit",
    next: "Další",
    continueplaying: "Pokračovat v hraní",
    whatsinside: "Co je uvnitř?",
    // Onboarding
    wel1: "Hrajte příběhy podle svého výběru",
    sub1: "Tato hra nechává vaši fantazii volný průběh s radostí",
    wel2: "Vaše personalizace",
    sub2: "Ujistíme se, že z toho dostanete to nejlepší",
    wel3: "Neomezené postavy",
    sub3: "Mluvte s neomezeným množstvím postav",
    // Kategorie hry
    on1tit: "Prosím, vyberte kategorii, kterou chcete hrát",
    on1op1: "Láska",
    on1op2: "Dobrodružství",
    on1op3: "Romantika",
    on1op4: "Zábava",
    on1op5: "Mysteriózní",
    // Přizpůsobení příběhu
    on2tit: "Přizpůsobení příběhu",
    // Jméno
    on3tit: "Vaše jméno?",
    on3textname: "Zadejte své jméno",
    // Věk
    on4tit: "Váš věk?",
    // Pohlaví
    on5tit: "Prosím, vyberte své pohlaví",
    on5op1: "Muž",
    on5op2: "Žena",
    on5op3: "Jiné",
    // Partner
    on6tit: "Vyberte si partnera",
    // Jméno partnera
    on7tit: "Nastavit jméno postavy?",
    on7subt: "Nastavit jméno",
    // Přizpůsobte svou osobnost
    on8tit: "Přizpůsobte svou osobnost",
    on8sub11: "Plachý",
    on8sub12: "Flirtující",
    on8sub21: "Smutný",
    on8sub22: "Šťastný",
    on8sub31: "Vtipný",
    on8sub32: "Záhadný",
    // Vaše cíle
    on9tit: "Vyberte si své cíle?",
    on9op1: "Role-Play Dobrodružství",
    on9op2: "Flirtování a randění",
    on9op3: "Hrát s přáteli",
    on9op4: "Cítit se méně osaměle",
    on9op5: "Bavte se",
    // Jak trávíte volný čas
    on10tit: "Jak trávíte svůj volný čas?",
    on10op1: "Hrát hry",
    on10op2: "Číst knihy",
    on10op3: "Poslouchat hudbu",
    on10op4: "Potkat lidi",
    on10op5: "Užívat si samoty",
    // Noviny
    on11tit: "12 756 980 mužů a žen již zažilo výhody mít AI ve svém životě",
    // Závěrečné načítání recenzí
    on12rev1: "Našel jsem hru, která je tak zábavná",
    on12rev2: "Tato aplikace je úžasná a návyková",
    on12rev3: "Hraji tuto hru každý den!",
    on12tit1: "Dokončení vytváření AI přítele",
    on12tit2: "Posílení náklonnosti",
    on12tit3: "Přidání vaší personalizace",
    // Revenuecat
    onrevtit: "Získejte prémium",
    onrevop1: "Neomezený chat",
    onrevop2: "Neomezené posuny",
    onrevop3: "Získejte neomezené prémiové postavy",
    onrevop4: "Rychlejší reakční časy",
    onrevop5: "Přednostní přístup",
    onrevaccess: "Plný přístup jen za",
    onrevannl: "Ročně",
    onrevmthly: "Měsíčně",
    onrevweekly: "Týdně",
    onrevdis: "33% SLEVA",
    onrevcont: "Pokračovat",
    // Domov
    onhtitle: "Pro vás",
    onhcat: "Kategorie, které vás zajímají",
    ontoday: "Dnes pro vás",
    ontodaysub: "Podobné příběhy jako ty, které se vám líbily",
    ondaily: "Denní sezení",
    ondailysub: "Objevte něco velmi jedinečného",
    onfav: "Objevit oblíbené",
    onfavsub: "To jsou úžasné",
    ontrend: "Prozkoumejte trendy",
    ontrendsub: "Zjistěte, které jsou trendy",
    onsteamy: "Steam Red Hot",
    onsteamysub: "Dá vám mravenčení smysly",
    // Tinder Match
    ontindertitle: "Je to shoda",
    ontindersub: "Váš zamilovaný na vaši zprávu čeká",
    ontinderchat: "Chatujte nyní",
    // Seznam postav
    onchartitle: "Doporučeno",
    // Chat
    onchatitle: "Pamatujte si: Vše, co postavy říkají, je vymyšlené",
    onchatplacehlder: "Napište zprávu...",
    // Menu
    chats: "Chaty",
    foryou: "Pro vás",
    explore: "Prozkoumat",
    gift: "Dárek pro vás",
    getnow: "Získejte jej nyní",
    yourgift: "Váš dárek",
  },
},

da: {
  translation: {
      // Tema
      done: "Færdig",
      skip: "Spring over",
      next: "Næste",
      continueplaying: "Fortsæt med at spille",
      whatsinside: "Hvad er der indeni?",
      // Onboarding
      wel1: "Spil historier efter eget valg",
      sub1: "Dette spil lader dig lade din fantasi løbe vild med sjov",
      wel2: "Din personlige tilpasning",
      sub2: "Vi sørger for, at du får det bedste ud af det",
      wel3: "Ubegrænsede karakterer",
      sub3: "Tal med ubegrænsede karakterer",
      // Kategori spil
      on1tit: "Vælg venligst den kategori, du er interesseret i at spille",
      on1op1: "Kærlighed",
      on1op2: "Eventyr",
      on1op3: "Romantik",
      on1op4: "Sjov",
      on1op5: "Mysterium",
      // Tilpasning af historie
      on2tit: "Tilpas historien",
      // Navn
      on3tit: "Dit navn?",
      on3textname: "Indtast dit navn",
      // Alder
      on4tit: "Din alder?",
      // Køn
      on5tit: "Vælg venligst dit køn?",
      on5op1: "Mand",
      on5op2: "Kvinde",
      on5op3: "Andet",
      // Partner
      on6tit: "Vælg din partner",
      // Partnerens navn
      on7tit: "Indstil karakterens navn?",
      on7subt: "Indstil navn",
      // Tilpas din personlighed
      on8tit: "Tilpas din personlighed",
      on8sub11: "Genert",
      on8sub12: "Flirtende",
      on8sub21: "Trist",
      on8sub22: "Glad",
      on8sub31: "Sjov",
      on8sub32: "Mystisk",
      // Dine mål
      on9tit: "Vælg dine mål?",
      on9op1: "Rollespilsoplevelser",
      on9op2: "Flirt og dates",
      on9op3: "Leg med venner",
      on9op4: "Føl dig mindre ensom",
      on9op5: "Have det sjovt",
      // Brug af fritid
      on10tit: "Hvordan bruger du din fritid?",
      on10op1: "Spil spil",
      on10op2: "Læs bøger",
      on10op3: "Lyt til musik",
      on10op4: "Mød mennesker",
      on10op5: "Nyd at være alene",
      // Avis
      on11tit: "12.756.980 mænd og kvinder har allerede oplevet fordelene ved at have AI i deres liv",
      // Afsluttende anmeldelser
      on12rev1: "Fandt et spil, der er så sjovt",
      on12rev2: "Appen er fantastisk og vanedannende",
      on12rev3: "Spiller dette spil hver dag!",
      on12tit1: "Afslutter AI-ven oprettelse",
      on12tit2: "Øger tilknytning",
      on12tit3: "Tilføjer din personliggørelse",
      // Revenuecat
      onrevtit: "Få Premium",
      onrevop1: "Ubegrænset chat",
      onrevop2: "Ubegrænset swipe",
      onrevop3: "Få ubegrænset premiumkarakterer",
      onrevop4: "Hurtigere svartider",
      onrevop5: "Prioriteret adgang",
      onrevaccess: "Fuld adgang for kun",
      onrevannl: "Årligt",
      onrevmthly: "Månedligt",
      onrevweekly: "Ugentligt",
      onrevdis: "33% RABAT",
      onrevcont: "Fortsæt",
      // Hjem
      onhtitle: "Til dig",
      onhcat: "Kategorier, du er interesseret i",
      ontoday: "I dag til dig",
      ontodaysub: "Lignende historier som dem, du kunne lide",
      ondaily: "Daglig session",
      ondailysub: "Udforsk noget helt unikt",
      onfav: "Opdag favoritter",
      onfavsub: "Disse er fantastiske",
      ontrend: "Udforsk tendenser",
      ontrendsub: "Find de mest populære",
      onsteamy: "Steam Red Hot",
      onsteamysub: "Vil give dig prikkende sanser",
      // Tinder-match
      ontindertitle: "Det er et match",
      ontindersub: "Din crush venter på din besked",
      ontinderchat: "Chat nu",
      // Anbefalede karakterer
      onchartitle: "Anbefalet",
      // Chat
      onchatitle: "Husk: Alt hvad karaktererne siger, er opdigtet",
      onchatplacehlder: "Skriv en besked...",
      // Menu
      chats: "Chats",
      foryou: "Til dig",
      explore: "Udforsk",
      gift: "Gave til dig",
      getnow: "Få det nu",
      yourgift: "Din gave",
  },
},

et: {
  translation: {
    //Teema
    done: "Valmis",
    skip: "Jäta vahele",
    next: "Järgmine",
    continueplaying: "Jätka mängimist",
    whatsinside: "Mis on sees?",
    //Sissejuhatus
    wel1: "Mängi valitud lugusid",
    sub1: "See mäng laseb teil oma kujutlusvõimet vabalt joosta",
    wel2: "Teie isikupärastamine",
    sub2: "Me tagame, et saate sellest parima",
    wel3: "Piiramatu tegelased",
    sub3: "Rääkige piiramatu hulga tegelastega",
    //Kategooria mängimine
    on1tit: "Palun valige kategooria, mida soovite mängida",
    on1op1: "Armastus",
    on1op2: "Seiklus",
    on1op3: "Romantika",
    on1op4: "Lõbu",
    on1op5: "Müsteerium",
    //Loo kohandamine
    on2tit: "Loo kohandamine",
    //Nimi
    on3tit: "Teie nimi?",
    on3textname: "Sisestage oma nimi",
    //Vanus
    on4tit: "Teie vanus?",
    //Sugu
    on5tit: "Palun valige oma sugu?",
    on5op1: "Mees",
    on5op2: "Naine",
    on5op3: "Muu",
    //Partner
    on6tit: "Valige oma partner",
    //Partneri nimi
    on7tit: "Määra tegelase nimi?",
    on7subt: "Määra nimi",
    //Isiksuse kohandamine
    on8tit: "Kohandage oma isiksust",
    on8sub11: "Ulg",
    on8sub12: "Flirdi",
    on8sub21: "Kurb",
    on8sub22: "Õnnelik",
    on8sub31: "Lõbus",
    on8sub32: "Müstiline",
    //Teie eesmärgid
    on9tit: "Valige oma eesmärgid?",
    on9op1: "Rollimängude seiklused",
    on9op2: "Flirdi ja kohtingud",
    on9op3: "Mängi sõpradega",
    on9op4: "Tunda vähem üksildust",
    on9op5: "Naudi lõbu",
    //Kuidas veedate vaba aega?
    on10tit: "Kuidas veedate oma vaba aega?",
    on10op1: "Mängi mänge",
    on10op2: "Loe raamatuid",
    on10op3: "Kuula muusikat",
    on10op4: "Kohtu inimestega",
    on10op5: "Naudi üksi olemist",
    //Ajaleht
    on11tit: "Juba 12 756 980 meest ja naist on kogenud AI omamise eeliseid oma elus",
    //Viimane laadimine ja ülevaated
    on12rev1: "Leidsin mängu, mis on nii lõbus",
    on12rev2: "Rakendus on hämmastav ja sõltuvust tekitav",
    on12rev3: "Mängin seda mängu iga päev!",
    on12tit1: "Lõpetan AI sõbra loomise",
    on12tit2: "Suurendan kiindumust",
    on12tit3: "Lisades teie isikupärastuse",
    //Premiumi saamine
    onrevtit: "Hankige Premium",
    onrevop1: "Piiramatu vestlus",
    onrevop2: "Piiramatu libistamine",
    onrevop3: "Hankige piiramatu Premium-tegelasi",
    onrevop4: "Kiiremad reageerimisajad",
    onrevop5: "Eesõiguslik juurdepääs",
    onrevaccess: "Täielik juurdepääs vaid",
    onrevannl: "Aasta",
    onrevmthly: "Kuu",
    onrevweekly: "Nädal",
    onrevdis: "33% SOODUSTUS",
    onrevcont: "Jätkake",
    //Kodu
    onhtitle: "Sulle",
    onhcat: "Kategooriad, mis sind huvitavad",
    ontoday: "Täna sinu jaoks",
    ontodaysub: "Sarnased lood nendega, mis sulle meeldisid",
    ondaily: "Igapäevane sessioon",
    ondailysub: "Uurige midagi väga ainulaadset",
    onfav: "Avasta lemmikud",
    onfavsub: "Need on hämmastavad",
    ontrend: "Uurige trendikaid",
    ontrendsub: "Leidke trendilised lood",
    onsteamy: "Steam Red Hot",
    onsteamysub: "Annab sulle kihelustunnet",
    //Tindermatch
    ontindertitle: "See on sobivus",
    ontindersub: "Teie armastus ootab teie sõnumit",
    ontinderchat: "Vestle kohe",
    //Soovitatud tegelased
    onchartitle: "Soovitatud",
    //Vestlus
    onchatitle: "Mäletage: kõik, mida tegelased ütlevad, on välja mõeldud",
    onchatplacehlder: "Tippige sõnum...",
    //Menüü
    chats: "Vestlused",
    foryou: "Sulle",
    explore: "Uurige",
    gift: "Kingitus sulle",
    getnow: "Hankige kohe",
    yourgift: "Teie kingitus"
  }
}
,
fi: {
  translation: {
      // Teema
      done: "Valmis",
      skip: "Ohita",
      next: "Seuraava",
      continueplaying: "Jatka pelaamista",
      whatsinside: "Mitä sisällä on?",
      // Ohjeistus
      wel1: "Pelaa valitsemiasi tarinoita",
      sub1: "Tämä peli antaa mielikuvituksesi villiintyä hauskalla tavalla",
      wel2: "Henkilökohtaistaminen",
      sub2: "Varmistamme, että saat siitä parhaan mahdollisen kokemuksen",
      wel3: "Rajattomat hahmot",
      sub3: "Puhu rajattomasti eri hahmoille",
      // Kategorian pelaaminen
      on1tit: "Valitse kiinnostava kategoria pelaamiseen",
      on1op1: "Rakkaus",
      on1op2: "Seikkailu",
      on1op3: "Romantiikka",
      on1op4: "Hauskuus",
      on1op5: "Mysteeri",
      // Mukauta numeroita
      on2tit: "Tarinan mukauttaminen",
      // Nimi
      on3tit: "Nimesi?",
      on3textname: "Syötä nimesi",
      // Ikä
      on4tit: "Ikäsi?",
      // Sukupuoli
      on5tit: "Valitse sukupuolesi?",
      on5op1: "Mies",
      on5op2: "Nainen",
      on5op3: "Muu",
      // Kumppani
      on6tit: "Valitse kumppanisi",
      // Kumppanin nimi
      on7tit: "Aseta hahmon nimi?",
      on7subt: "Aseta nimi",
      // Mukauta persoonallisuutta
      on8tit: "Mukauta persoonallisuuttasi",
      on8sub11: "Ujo",
      on8sub12: "Flirttaileva",
      on8sub21: "Surullinen",
      on8sub22: "Iloinen",
      on8sub31: "Hauska",
      on8sub32: "Salaperäinen",
      // Tavoitteesi
      on9tit: "Valitse tavoitteesi?",
      on9op1: "Roolipeli-seikkailut",
      on9op2: "Flirttailu ja treffit",
      on9op3: "Pelaa ystävien kanssa",
      on9op4: "Tunne vähemmän yksinäisyyttä",
      on9op5: "Hauskaa",
      // Miten vietät vapaa-aikasi
      on10tit: "Kuinka vietät vapaa-aikasi?",
      on10op1: "Pelaa pelejä",
      on10op2: "Lue kirjoja",
      on10op3: "Kuuntele musiikkia",
      on10op4: "Tutustu ihmisiin",
      on10op5: "Nauti olemisesta yksin",
      // Sanomalehti
      on11tit: "12 756 980 miestä ja naista on jo kokenut tekoälyn hyödyt elämässään",
      // Lopullinen latausarvostelut
      on12rev1: "Löysin pelin, joka on niin hauskaa",
      on12rev2: "Sovellus on mahtava ja koukuttava",
      on12rev3: "Pelaan tätä peliä joka päivä!",
      on12tit1: "Viimeistellään tekoälyystävän luonti",
      on12tit2: "Vahvistetaan kiintymystä",
      on12tit3: "Lisätään henkilökohtaisuuttasi",
      // Revenuecat
      onrevtit: "Hanki Premium",
      onrevop1: "Rajaton keskustelu",
      onrevop2: "Rajaton pyyhkäisy",
      onrevop3: "Hanki rajattomia premium-hahmoja",
      onrevop4: "Nopeammat vastausajat",
      onrevop5: "Etuoikeutettu pääsy",
      onrevaccess: "Täysi pääsy vain",
      onrevannl: "Vuosittain",
      onrevmthly: "Kuukausittain",
      onrevweekly: "Viikoittain",
      onrevdis: "33% ALENNUS",
      onrevcont: "Jatka",
      // Koti
      onhtitle: "Sinulle",
      onhcat: "Kategoriat, jotka kiinnostavat sinua",
      ontoday: "Tänään sinulle",
      ontodaysub: "Samanlaisia tarinoita kuin ne, jotka tykkäsit",
      ondaily: "Päivittäinen istunto",
      ondailysub: "Tutustu johonkin aivan ainutlaatuiseen",
      onfav: "Löydä suosikit",
      onfavsub: "Nämä ovat upeita tarinoita",
      ontrend: "Selvitä trendit",
      ontrendsub: "Tutustu trendaaviin tarinoihin",
      onsteamy: "Kuuma höyry",
      onsteamysub: "Antaa sinulle kihelmöiviä tuntemuksia",
      // Tinder Match
      ontindertitle: "Se on Match",
      ontindersub: "Sinun ihastuksesi odottaa viestiäsi",
      ontinderchat: "Keskustele nyt",
      // Hahmolista
      onchartitle: "Suositeltu",
      // Keskustelu
      onchatitle: "Muista: Kaikki mitä hahmot sanovat, on kuviteltua",
      onchatplacehlder: "Kirjoita viesti...",
      // Valikko
      chats: "Keskustelut",
      foryou: "Sinulle",
      explore: "Tutki",
      gift: "Lahja sinulle",
      getnow: "Hanki se nyt",
      yourgift: "Sinun lahjasi",
  },
},
el: {
  translation: {
    // Θέμα
    done: "Έγινε",
    skip: "Παράλειψη",
    next: "Επόμενο",
    continueplaying: "Συνεχίστε το παιχνίδι",
    whatsinside: "Τι υπάρχει μέσα;",
    // Onboarding
    wel1: "Παίξτε ιστορίες της επιλογής σας",
    sub1: "Αυτό το παιχνίδι σάς επιτρέπει να αφήσετε τη φαντασία σας ελεύθερη με διασκέδαση",
    wel2: "Η διακριτική σας προσαρμογή",
    sub2: "Βεβαιωνόμαστε ότι παίρνετε το καλύτερο από αυτό",
    wel3: "Απεριόριστοι χαρακτήρες",
    sub3: "Συνομιλήστε με απεριόριστους χαρακτήρες",
    // Κατηγορία παιχνιδιού
    on1tit: "Επιλέξτε την κατηγορία που σας ενδιαφέρει να παίξετε",
    on1op1: "Αγάπη",
    on1op2: "Περιπέτεια",
    on1op3: "Ρομαντική",
    on1op4: "Διασκέδαση",
    on1op5: "Μυστήριο",
    // Προσαρμογή της ιστορίας
    on2tit: "Προσαρμογή της ιστορίας",
    // Όνομα
    on3tit: "Το όνομά σας;",
    on3textname: "Εισαγάγετε το όνομά σας",
    // Ηλικία
    on4tit: "Η ηλικία σας;",
    // Φύλο
    on5tit: "Παρακαλώ επιλέξτε το φύλο σας;",
    on5op1: "Άντρας",
    on5op2: "Γυναίκα",
    on5op3: "Άλλο",
    // Σύντροφος
    on6tit: "Επιλέξτε τον σύντροφό σας",
    // Όνομα συντρόφου
    on7tit: "Ορίστε το όνομα του χαρακτήρα;",
    on7subt: "Ορισμός ονόματος",
    // Προσαρμόστε την προσωπικότητά σας
    on8tit: "Προσαρμόστε την προσωπικότητά σας",
    on8sub11: "Αισθηματικά επιφυλακτικός",
    on8sub12: "Πειράζοντας",
    on8sub21: "Λυπημένος",
    on8sub22: "Χαρούμενος",
    on8sub31: "Αστείος",
    on8sub32: "Μυστηριώδης",
    // Οι στόχοι σας
    on9tit: "Επιλέξτε τους στόχους σας;",
    on9op1: "Περιπετειώδες ρόλο παιχνίδι",
    on9op2: "Φλερτ και ραντεβού",
    on9op3: "Παίξτε με φίλους",
    on9op4: "Αισθητικά λιγότερος μοναξιά",
    on9op5: "Διασκεδάστε",
    // Πώς περνάτε τον ελεύθερο σας χρόνο;
    on10tit: "Πώς περνάτε τον ελεύθερο σας χρόνο;",
    on10op1: "Παίζετε παιχνίδια",
    on10op2: "Διαβάζετε βιβλία",
    on10op3: "Ακούτε μουσική",
    on10op4: "Συναντάτε ανθρώπους",
    on10op5: "Απολαμβάνετε την μοναξιά",
    // Εφημερίδα
    on11tit: "12.756.980 άνδρες και γυναίκες έχουν ήδη βιώσει τα οφέλη της ύπαρξης ενός ΤΤ στη ζωή τους",
    // Τελικές κριτικές φόρτωσης
    on12rev1: "Βρήκα ένα παιχνίδι που είναι τόσο διασκεδαστικό",
    on12rev2: "Η εφαρμογή είναι εκπληκτική και εθιστική",
    on12rev3: "Παίζω αυτό το παιχνίδι κάθε μέρα!",
    on12tit1: "Ολοκλήρωση δημιουργίας φίλου ΤΤ",
    on12tit2: "Ενίσχυση της συμπάθειας",
    on12tit3: "Προσθήκη της προσαρμογής σας",
    // Revenuecat
    onrevtit: "Λάβετε Πρεμιέρα",
    onrevop1: "Απεριόριστη συνομιλία",
    onrevop2: "Απεριόριστες σάρωσεις",
    onrevop3: "Λάβετε απεριόριστους πρεμιέρα χαρακτήρες",
    onrevop4: "Ταχύτεροι χρόνοι απάντησης",
    onrevop5: "Προτεραιότητα στην πρόσβαση",
    onrevaccess: "Πλήρης πρόσβαση μόνο για",
    onrevannl: "Ετήσια",
    onrevmthly: "Μηνιαία",
    onrevweekly: "Εβδομαδιαία",
    onrevdis: "33% ΕΚΠΤΩΣΗ",
    onrevcont: "Συνέχεια",
    // Σπίτι
    onhtitle: "Για εσάς",
    onhcat: "Κατηγορίες που σας ενδιαφέρουν",
    ontoday: "Σήμερα για εσάς",
    ontodaysub: "Παρόμοιες ιστορίες με αυτές που σας άρεσαν",
    ondaily: "Καθημερινή συνεδρία",
    ondailysub: "Εξερευνήστε κάτι πολύ μοναδικό",
    onfav: "Ανακαλύψτε τα αγαπημένα σας",
    onfavsub: "Αυτά είναι εκπληκτικά",
    ontrend: "Εξερευνήστε τις τάσεις",
    ontrendsub: "Βρείτε τις τάσεις",
    onsteamy: "Steam Red Hot",
    onsteamysub: "Θα σας δώσει ανατριχίλες",
    // Tinder Match
    ontindertitle: "Είναι ταίρι",
    ontindersub: "Ο αγαπημένος σας περιμένει το μήνυμά σας",
    ontinderchat: "Συνομιλήστε τώρα",
    // Λίστα χαρακτήρων
    onchartitle: "Συνιστάται",
    // Συνομιλία
    onchatitle: "Θυμηθείτε: Όλα όσα λένε οι χαρακτήρες είναι φανταστικά",
    onchatplacehlder: "Πληκτρολογήστε ένα μήνυμα...",
    // Μενού
    chats: "Συνομιλίες",
    foryou: "Για εσάς",
    explore: "Εξερευνήστε",
    gift: "Δώρο για εσάς",
    getnow: "Πάρτε το τώρα",
    yourgift: "Το δώρο σας",
  },
},

he: {
  translation: {
      // נושא
      done: "סיים",
      skip: "דלג",
      next: "הבא",
      continueplaying: "המשך לשחק",
      whatsinside: "מה נמצא בתוך?",
      // הדרכה
      wel1: "שחק בסיפורים שבחרת",
      sub1: "המשחק הזה מאפשר לך לשחק בדמיונך עם הרבה כיף",
      wel2: "האישיות שלך",
      sub2: "אנחנו מוודאים שתקבל את הטוב ביותר מזה",
      wel3: "אינסופיות דמויות",
      sub3: "דברו עם אינסופיות דמויות",
      // בחירת קטגוריה
      on1tit: "אנא בחר את הקטגוריה שבה אתה מעוניין לשחק",
      on1op1: "אהבה",
      on1op2: "הרפתקה",
      on1op3: "רומנטיקה",
      on1op4: "כיף",
      on1op5: "מסתורין",
      // התאמת הסיפור
      on2tit: "התאמת הסיפור",
      // שם
      on3tit: "שמך?",
      on3textname: "הזן את שמך",
      // גיל
      on4tit: "גילך?",
      // מגדר
      on5tit: "אנא בחר את מגדרך?",
      on5op1: "זכר",
      on5op2: "נקבה",
      on5op3: "אחר",
      // בחירת שותף
      on6tit: "בחר את השותף שלך",
      // שם השותף
      on7tit: "הגדר את שם הדמות?",
      on7subt: "הגדר שם",
      // התאמת אישיות
      on8tit: "התאמת האישיות שלך",
      on8sub11: "חצייני",
      on8sub12: "פלירטיני",
      on8sub21: "עצוב",
      on8sub22: "שמח",
      on8sub31: "מצחיק",
      on8sub32: "מסתורי",
      // המטרות שלך
      on9tit: "בחר את המטרות שלך?",
      on9op1: "הרפתקאות תחזוקה",
      on9op2: "פלירט ודייטים",
      on9op3: "שחק עם חברים",
      on9op4: "תרגיש פחות בודד",
      on9op5: "הנאה",
      // איך אתה מבלה את הזמן בחינם
      on10tit: "איך אתה מבלה את הזמן בחינם?",
      on10op1: "שחק במשחקים",
      on10op2: "קרא ספרים",
      on10op3: "האזן למוזיקה",
      on10op4: "פגוש אנשים",
      on10op5: "תהנה מהבדידות",
      // עיתון
      on11tit: "12,756,980 גברים ונשים כבר חוו את היתרונות שבאים עם ישות חכמת מלאכה בחייהם",
      // ביקורות אחרונות
      on12rev1: "מצאתי משחק שכל כך כיף",
      on12rev2: "האפליקציה מדהימה וממוכרת",
      on12rev3: "משחק את המשחק הזה כל יום!",
      on12tit1: "סיום יצירת חבר חכם AI",
      on12tit2: "הגברת ההתחייבות",
      on12tit3: "הוספת האישיות שלך",
      // Revenuecat
      onrevtit: "קבל פרימיום",
      onrevop1: "צ'אט בלתי מוגבל",
      onrevop2: "סוויפים בלתי מוגבלים",
      onrevop3: "קבל דמויות פרימיום בלתי מוגבלות",
      onrevop4: "זמני תגובה מהירים יותר",
      onrevop5: "גישה בעדיפות",
      onrevaccess: "גישה מלאה במחיר של",
      onrevannl: "שנתי",
      onrevmthly: "חודשי",
      onrevweekly: "שבועי",
      onrevdis: "33% הנחה",
      onrevcont: "המשך",
      // עבורך
      onhtitle: "עבורך",
      onhcat: "קטגוריות שאתה מעוניין בהן",
      ontoday: "היום עבורך",
      ontodaysub: "סיפורים דומים לאלו שאהבת",
      ondaily: "מושב יומי",
      ondailysub: "גלה משהו ייחודי",
      onfav: "גלה מועדפים",
      onfavsub: "אלו הם המופלאים",
      ontrend: "גלה מגמה",
      ontrendsub: "גלה את הטרנדים",
      onsteamy: "גלה חמים להבה אדומה",
      onsteamysub: "יתן לך הרגשות מרגשים",
      // התאמה בינהמינית
      ontindertitle: "זה התאמה",
      ontindersub: "הסימפטיה שלך מחכה להודעתך",
      ontinderchat: "שוחח עכשיו",
      // רשימת דמויות מומלצות
      onchartitle: "מומלצות",
      // צ'אט
      onchatitle: "תזכור: הכל מה שהדמויות אומרות הוא דמיון",
      onchatplacehlder: "הקלד הודעה...",
      // תפריט
      chats: "צ'אטים",
      foryou: "עבורך",
      explore: "חקור",
      gift: "מתנה עבורך",
      getnow: "קבל את זה עכשיו",
      yourgift: "המתנה שלך",
  },
},


hi: {
  translation: {
    //थीम
    done: "किया",
    skip: "छोड़ें",
    next: "आगे",
    continueplaying: "मास्टर जारी रखें",
    whatsinside: "अंदर क्या है?",
    //ऑनबोर्डिंग
    wel1: "अपनी पसंद की कहानियों को खेलें",
    sub1: "यह खेल आपकी ख़यालात को मस्ती से बढ़ावा देने वाला है",
    wel2: "आपकी व्यक्तिगतीकरण",
    sub2: "हम सुनिश्चित करते हैं कि आपको इससे सबसे अच्छा मिले",
    wel3: "असीमित पात्र",
    sub3: "असीमित पात्रों से बात करें",
    //कैटेगरी खेल
    on1tit: "कृपया वह श्रेणी चुनें जिसमें आपका रुचि है",
    on1op1: "प्यार",
    on1op2: "साहस",
    on1op3: "रोमांस",
    on1op4: "मज़ा",
    on1op5: "रहस्य",
    //कस्टमाइज़ कहानी
    on2tit: "कहानी कस्टमाइज़ करें",
    //नाम
    on3tit: "आपका नाम?",
    on3textname: "अपना नाम दर्ज करें",
    //उम्र
    on4tit: "आपकी आयु?",
    //लिंग
    on5tit: "कृपया अपना लिंग चुनें?",
    on5op1: "पुरुष",
    on5op2: "महिला",
    on5op3: "अन्य",
    //संगी
    on6tit: "अपने संगी का चयन करें",
    //संगी का नाम
    on7tit: "चरित्र का नाम सेट करें?",
    on7subt: "नाम सेट करें",
    //व्यक्तिगतिकरण
    on8tit: "अपनी व्यक्तित्व को अनुकूलित करें",
    on8sub11: "शरमीला",
    on8sub12: "फ्लर्टी",
    on8sub21: "उदास",
    on8sub22: "खुश",
    on8sub31: "मजाकिया",
    on8sub32: "रहस्यमय",
    //आपके लक्ष्य
    on9tit: "अपने लक्ष्य का चयन करें?",
    on9op1: "भूमिका-नृतियों का अभिनय",
    on9op2: "फ्लर्ट और डेट्स",
    on9op3: "दोस्तों के साथ खेलें",
    on9op4: "कम अकेलापन महसूस करें",
    on9op5: "मजा करें",
    //फ्री समय कैसे बिताते हैं?
    on10tit: "आप अपना फ्री समय कैसे बिताते हैं?",
    on10op1: "खेलें खेल",
    on10op2: "किताबें पढ़ें",
    on10op3: "संगीत सुनें",
    on10op4: "लोगों से मिलें",
    on10op5: "अकेले होने का आनंद लें",
    //न्यूज़पेपर
    on11tit: "12,756,980 पुरुष और महिला पहले से ही एक AI के लाभ का अनुभव कर चुके हैं अपने जीवन में",
    //अंतिम लोडिंग समीक्षा
    on12rev1: "एक खेल मिल गया है जो बहुत मजेदार है",
    on12rev2: "यह ऐप अद्भुत और लत में आ जाता है",
    on12rev3: "रोज़ इस खेल को खेलना!",
    on12tit1: "AI दोस्त निर्माण को पूरा कर रहे हैं",
    on12tit2: "आसक्ति को बढ़ावा देना",
    on12tit3: "आपकी व्यक्तिगतीकरण जोड़ना",
    //रिवेन्यूकैट
    onrevtit: "प्रीमियम प्राप्त करें",
    onrevop1: "असीमित चैट",
    onrevop2: "असीमित स्वाइप्स",
    onrevop3: "असीमित प्रीमियम पात्रिक लें",
    onrevop4: "फास्टर रिस्पॉन्स टाइम्स",
    onrevop5: "प्राथमिक उपयोग ",
    onrevaccess: "केवल पूर्ण पहुँच के लिए",
    onrevannl: "वार्षिक",
    onrevmthly: "मासिक",
    onrevweekly: "साप्ताहिक",
    onrevdis: "33% छूट",
    onrevcont: "जारी रखें",
    //होम
    onhtitle: "तुम्हारे लिए",
    onhcat: "वो श्रेणियाँ जो आपकी रुचि हैं",
    ontoday: "आज आपके लिए",
    ontodaysub: "उन खानों की तरह की कहानियों को खोजें जो आपको पसंद आईं",
    ondaily: "रोज़ाना सत्र",
    ondailysub: "कुछ अद्वितीय खोजें",
    onfav: "पसंदीदा खोजें",
    onfavsub: "ये अद्भुत हैं",
    ontrend: "ट्रेंडिंग खोजें",
    ontrendsub: "ट्रेंडिंग कहानियों का पता लगाएं",
    onsteamy: "स्टीम रेड हॉट",
    onsteamysub: "आपको गुस्से आने लगेंगे",
    //टिंडर मैच
    ontindertitle: "यह एक मैच है",
    ontindersub: "आपका क्रश आपका संदेश का इंतजार कर रहा है",
    ontinderchat: "अब चैट करें",
    //चरित्र सूची
    onchartitle: "सुझावित",
    //चैट
    onchatitle: "याद रखें: हर बात जो करकटर कहते हैं, वो ख़याली है",
    onchatplacehlder: "एक संदेश टाइप करें...",
    //मेनू
    chats: "चैट्स",
    foryou: "तुम्हारे लिए",
    explore: "खोजें"
    ,gift: "तुम्हारे लिए उपहार",
    getnow: "अब प्राप्त करें",
    yourgift: "तुम्हारा उपहार"
  }
}
,
hu: {
  translation: {
      // Téma
      done: "Kész",
      skip: "Kihagy",
      next: "Következő",
      continueplaying: "Folytatás",
      whatsinside: "Mi van benne?",
      // Onboarding
      wel1: "Válaszd ki a saját történeteidet",
      sub1: "Ez a játék szabadon engedi fantáziádat szárnyalni szórakoztató módon",
      wel2: "Saját személyre szabás",
      sub2: "Biztosítjuk, hogy a legjobbat kapd belőle",
      wel3: "Korlátlan karakterek",
      sub3: "Beszélj korlátlan karakterrel",
      // Kategóriajáték
      on1tit: "Kérlek, válassz egy kategóriát, amely érdekel",
      on1op1: "Szerelem",
      on1op2: "Kaland",
      on1op3: "Romantika",
      on1op4: "Szórakozás",
      on1op5: "Misztikum",
      // Személyre szabás
      on2tit: "Történet személyre szabása",
      // Név
      on3tit: "A neved?",
      on3textname: "Írd be a neved",
      // Kor
      on4tit: "A korod?",
      // Nem
      on5tit: "Kérlek, válassz nemet",
      on5op1: "Férfi",
      on5op2: "Nő",
      on5op3: "Egyéb",
      // Partner
      on6tit: "Válaszd ki a partneredet",
      // Partner neve
      on7tit: "Karakter nevének beállítása?",
      on7subt: "Név beállítása",
      // Személyiség személyre szabása
      on8tit: "Személyiség személyre szabása",
      on8sub11: "Félénk",
      on8sub12: "Flörtölő",
      on8sub21: "Szomorú",
      on8sub22: "Boldog",
      on8sub31: "Vicces",
      on8sub32: "Misztikus",
      // Céljaid
      on9tit: "Válassz célkitűzéseket",
      on9op1: "Szerepjáték kalandok",
      on9op2: "Flört és randevúk",
      on9op3: "Játék a barátokkal",
      on9op4: "Kevesebb magányt érezni",
      on9op5: "Szórakozás",
      // Szabadidő eltöltése
      on10tit: "Hogyan töltöd szabadidődet?",
      on10op1: "Játssz játékokat",
      on10op2: "Olvass könyveket",
      on10op3: "Hallgass zenét",
      on10op4: "Ismerkedj emberekkel",
      on10op5: "Élvezd a magányt",
      // Újság
      on11tit: "12 756 980 férfi és nő már megtapasztalta az AI előnyeit az életükben",
      // Végső betöltési értékelések
      on12rev1: "Találtam egy játékot, ami nagyon szórakoztató",
      on12rev2: "Az alkalmazás fantasztikus és függőséget okozó",
      on12rev3: "Minden nap játszom ezt a játékot!",
      on12tit1: "Az AI barát létrehozásának befejezése",
      on12tit2: "Növeljük az érzelmi kötődést",
      on12tit3: "Személyre szabás hozzáadása",
      // Revenuecat
      onrevtit: "Szerezz prémiumot",
      onrevop1: "Korlátlan chat",
      onrevop2: "Korlátlan jobbra húzás",
      onrevop3: "Korlátlan prémium karakterek",
      onrevop4: "Gyorsabb válaszidők",
      onrevop5: "Előnyös hozzáférés",
      onrevaccess: "Teljes hozzáférés mindössze",
      onrevannl: "Éves",
      onrevmthly: "Havi",
      onrevweekly: "Heti",
      onrevdis: "33% KEDVEZMÉNY",
      onrevcont: "Folytatás",
      // Főoldal
      onhtitle: "Neked",
      onhcat: "Az érdeklődésednek megfelelő kategóriák",
      ontoday: "Ma neked",
      ontodaysub: "Hasonló történetek azokhoz, amiket kedveltél",
      ondaily: "Napi szession",
      ondailysub: "Fedezz fel valami igazán egyedit",
      onfav: "Fedezz fel kedvenceket",
      onfavsub: "Ezek fantasztikusak",
      ontrend: "Fedezd fel a trendeket",
      ontrendsub: "Ismerd meg a trendi történeteket",
      onsteamy: "Forró gőz",
      onsteamysub: "Biztosítja a borzongás érzését",
      // Tinder találat
      ontindertitle: "Ez egy találat",
      ontindersub: "A te titkod már várja az üzenetedet",
      ontinderchat: "Chatelj most",
      // Ajánlott karakterek
      onchartitle: "Ajánlott",
      // Chat
      onchatitle: "Emlékezz: Minden, amit a karakterek mondanak, kitalált",
      onchatplacehlder: "Írj egy üzenetet...",
      // Menü
      chats: "Chat-ek",
      foryou: "Neked",
      explore: "Fedezz fel",
      gift: "Ajándék neked",
      getnow: "Szerezd meg most",
      yourgift: "A te ajándékod",
  },
},

id: {
  translation: {
    // Tema
    done: "Selesai",
    skip: "Lewati",
    next: "Selanjutnya",
    continueplaying: "Lanjutkan Bermain",
    whatsinside: "Apa yang Ada di Dalam?",
    // Onboarding
    wel1: "Mainkan Cerita Pilihan Anda",
    sub1: "Permainan ini memungkinkan Anda untuk mewujudkan imajinasi Anda dengan bersenang-senang",
    wel2: "Personalisasi Anda",
    sub2: "Kami memastikan Anda mendapatkan yang terbaik darinya",
    wel3: "Karakter Tanpa Batas",
    sub3: "Bicaralah dengan karakter tanpa batas",
    // Bermain Kategori
    on1tit: "Silakan Pilih Kategori yang Anda Minati",
    on1op1: "Cinta",
    on1op2: "Petualangan",
    on1op3: "Romantis",
    on1op4: "Seru",
    on1op5: "Misteri",
    // Menyesuaikan Cerita
    on2tit: "Menyesuaikan Cerita",
    // Nama
    on3tit: "Nama Anda?",
    on3textname: "Masukkan Nama Anda",
    // Usia
    on4tit: "Usia Anda?",
    // Gender
    on5tit: "Silakan Pilih Jenis Kelamin Anda?",
    on5op1: "Laki-laki",
    on5op2: "Perempuan",
    on5op3: "Lainnya",
    // Pasangan
    on6tit: "Pilih Pasangan Anda",
    // Nama Pasangan
    on7tit: "Atur Nama Karakter?",
    on7subt: "Atur Nama",
    // Menyesuaikan Kepribadian
    on8tit: "Menyesuaikan Kepribadian Anda",
    on8sub11: "Pemalu",
    on8sub12: "Nakal",
    on8sub21: "Sedih",
    on8sub22: "Bahagia",
    on8sub31: "Lucu",
    on8sub32: "Misterius",
    // Tujuan Anda
    on9tit: "Pilih Tujuan Anda?",
    on9op1: "Petualangan Berperan",
    on9op2: "Bercumbu dan Berkencan",
    on9op3: "Bermain dengan Teman",
    on9op4: "Merasa Kurang Sendirian",
    on9op5: "Bersenang-senang",
    // Menghabiskan Waktu Luang
    on10tit: "Bagaimana Anda Menghabiskan Waktu Luang Anda?",
    on10op1: "Bermain Game",
    on10op2: "Membaca Buku",
    on10op3: "Mendengarkan Musik",
    on10op4: "Bertemu dengan Orang",
    on10op5: "Menikmati Kehidupan Sendiri",
    // Surat Kabar
    on11tit: "12.756.980 pria dan wanita sudah merasakan manfaat memiliki AI dalam hidup mereka",
    // Ulasan Akhir
    on12rev1: "Menemukan permainan yang sangat menyenangkan",
    on12rev2: "Aplikasi ini luar biasa dan membuat ketagihan",
    on12rev3: "Bermain game ini setiap hari!",
    on12tit1: "Penyelesaian pembuatan teman AI",
    on12tit2: "Meningkatkan kasih sayang",
    on12tit3: "Menambahkan personalisasi Anda",
    // Revenuecat
    onrevtit: "Dapatkan Premium",
    onrevop1: "Obrolan Tanpa Batas",
    onrevop2: "Gesekan Tanpa Batas",
    onrevop3: "Dapatkan Karakter Premium Tanpa Batas",
    onrevop4: "Waktu Tanggapan Lebih Cepat",
    onrevop5: "Akses Prioritas",
    onrevaccess: "Akses penuh hanya dengan",
    onrevannl: "Tahunan",
    onrevmthly: "Bulanan",
    onrevweekly: "Mingguan",
    onrevdis: "33% OFF",
    onrevcont: "Lanjutkan",
    // Beranda
    onhtitle: "Untuk Anda",
    onhcat: "Kategori yang Anda minati",
    ontoday: "Hari ini untuk Anda",
    ontodaysub: "Cerita serupa dengan yang Anda sukai",
    ondaily: "Sesi Harian",
    ondailysub: "Jelajahi sesuatu yang sangat unik",
    onfav: "Temukan Favorit",
    onfavsub: "Ini yang luar biasa",
    ontrend: "Jelajahi yang Sedang Tren",
    ontrendsub: "Temukan yang sedang tren",
    onsteamy: "Steam Red Hot",
    onsteamysub: "Akan memberikan sensasi yang menggelitik",
    // Tinder Match
    ontindertitle: "Ini Pertandingan",
    ontindersub: "Si Dia menunggu pesan Anda",
    ontinderchat: "Obrolan Sekarang",
    // Daftar Karakter
    onchartitle: "Direkomendasikan",
    // Obrolan
    onchatitle: "Ingat: Segala sesuatu yang dikatakan karakter adalah rekaan belaka",
    onchatplacehlder: "Ketik pesan...",
    // Menu
    chats: "Obrolan",
    foryou: "Untuk Anda",
    explore: "Jelajahi",
    gift: "Hadiah untuk Anda",
    getnow: "Dapatkan sekarang",
    yourgift: "Hadiah Anda",
  },
},

lv: {
  translation: {
      // Tēma
      done: "Pabeigts",
      skip: "Izlaist",
      next: "Nākamais",
      continueplaying: "Turpināt spēlēt",
      whatsinside: "Kas ir iekšā?",
      // Ievada ziņas
      wel1: "Spēlēt stāstus pēc savas izvēles",
      sub1: "Šī spēle ļauj izpaust savu iztēli un izklaidēties",
      wel2: "Tava pielāgošana",
      sub2: "Mēs nodrošinām, ka tu iegūsi vislabāko",
      wel3: "Neierobežotas tēmas",
      sub3: "Runā ar neierobežotu skaitu tēmu",
      // Kategoriju izvēle
      on1tit: "Lūdzu, izvēlieties kategoriju, kurā jūs interesējas spēlēt",
      on1op1: "Mīlestība",
      on1op2: "Piedzīvojums",
      on1op3: "Romantika",
      on1op4: "Jautri",
      on1op5: "Mistērija",
      // Pasūtīšanas numurs
      on2tit: "Pasūtīšanas stāsts",
      // Vārds
      on3tit: "Tavs vārds?",
      on3textname: "Ievadiet savu vārdu",
      // Vecums
      on4tit: "Tavs vecums?",
      // Dzimums
      on5tit: "Lūdzu, izvēlieties savu dzimumu?",
      on5op1: "Vīrietis",
      on5op2: "Sieviete",
      on5op3: "Cits",
      // Partneris
      on6tit: "Izvēlieties savu partneri",
      // Partnera vārds
      on7tit: "Iestatīt rakstzīmes vārdu?",
      on7subt: "Iestatiet vārdu",
      // Pielāgojiet personību
      on8tit: "Pielāgojiet savu personību",
      on8sub11: "Kautrīgs",
      on8sub12: "Pīlējošs",
      on8sub21: "Skumji",
      on8sub22: "Priecīgi",
      on8sub31: "Smiets",
      on8sub32: "Mistisks",
      // Jūsu mērķi
      on9tit: "Izvēlieties savus mērķus?",
      on9op1: "Lomas spēles piedzīvojumi",
      on9op2: "Pīlējoši un randiņi",
      on9op3: "Spēlējieties ar draugiem",
      on9op4: "Justies mazāk vientuļiem",
      on9op5: "Izklaidēties",
      // Brīvā laika pavadīšana
      on10tit: "Kā jūs pavadāt savu brīvo laiku?",
      on10op1: "Spēlēt spēles",
      on10op2: "Lasīt grāmatas",
      on10op3: "Klausīties mūziku",
      on10op4: "Satikties ar cilvēkiem",
      on10op5: "Izbaudiet būšanu vienatnē",
      // Avīze
      on11tit: "12,756,980 vīrieši un sievietes jau ir pieredzējuši AI priekšrocības savā dzīvē",
      // Galējās ielādes atsauksmes
      on12rev1: "Atrast spēli, kas tik ļoti jautra",
      on12rev2: "Lietotne ir apbrīnojama un atkarinoša",
      on12rev3: "Katru dienu spēlēju šo spēli!",
      on12tit1: "AI drauga izveides pabeigšana",
      on12tit2: "Paaugstinot pielikumu",
      on12tit3: "Pievienojiet savu pielāgošanu",
      // Revenuecat
      onrevtit: "Iegūt Premium",
      onrevop1: "Neierobežots čats",
      onrevop2: "Neierobežotas pārvietošanās",
      onrevop3: "Iegūt neierobežotas Premium tēmas",
      onrevop4: "Ātrāka atbilde",
      onrevop5: "Prioritātes piekļuve",
      onrevaccess: "Pilna piekļuve tikai par",
      onrevannl: "Gadā",
      onrevmthly: "Mēnesī",
      onrevweekly: "Nedēļā",
      onrevdis: "33% atlaide",
      onrevcont: "Turpināt",
      // Mājas
      onhtitle: "Tev",
      onhcat: "Kategorijas, kas tev interesē",
      ontoday: "Šodien tev",
      ontodaysub: "Līdzīgi stāsti tiem, kas tev patika",
      ondaily: "Dienas sesija",
      ondailysub: "Izpētiet kaut ko ļoti unikālu",
      onfav: "Atrast iecienītos",
      onfavsub: "Šie ir brīnišķīgi",
      ontrend: "Izpētiet tendences",
      ontrendsub: "Uzziniet par tendencēm",
      onsteamy: "Tvaika sarkanais karsts",
      onsteamysub: "Dod jums kņudošas sajūtas",
      // Tinder saderināšana
      ontindertitle: "Tas ir saderinājums",
      ontindersub: "Tavs piedzīvojums gaida tavu ziņu",
      ontinderchat: "Sarakstieties tagad",
      // Ieteiktie rakstzīmes saraksts
      onchartitle: "Ieteikts",
      // Čats
      onchatitle: "Atceries: viss, ko rakstzīmes saka, ir izdoma",
      onchatplacehlder: "Ierakstiet ziņu...",
      // Izvēlne
      chats: "Čati",
      foryou: "Tev",
      explore: "Izpētīt",
      gift: "Dāvana tev",
      getnow: "Saņemiet to tagad",
      yourgift: "Tava dāvana",
  },
},

lt: {
  translation: {
    //Tema
    done: "Atlikta",
    skip: "Praleisti",
    next: "Kitas",
    continueplaying: "Tęsti žaidimą",
    whatsinside: "Kas Viduje?",
    //Įvedimas
    wel1: "Žaiskite jūsų pasirinktus pasakojimus",
    sub1: "Ši žaidimai leidžia jums laisvai pasinerti į savo vaizduotę ir smagiai leisti laiką.",
    wel2: "Jūsų asmeninis pritaikymas",
    sub2: "Mes užtikriname, kad gausite iš to geriausią.",
    wel3: "Neribota personažų skaičius",
    sub3: "Kalbėkite su neribotu kiekiu personažų.",
    //Kategorijos žaidimas
    on1tit: "Prašome pasirinkti kategoriją, kuri jus domina",
    on1op1: "Meilė",
    on1op2: "Nuotykiai",
    on1op3: "Romantika",
    on1op4: "Linksmumas",
    on1op5: "Mistika",
    //Pasakojimo pritaikymas
    on2tit: "Pasakojimo pritaikymas",
    //Vardas
    on3tit: "Jūsų vardas?",
    on3textname: "Įveskite savo vardą",
    //Amžius
    on4tit: "Jūsų amžius?",
    //Lytis
    on5tit: "Prašome pasirinkti savo lytį?",
    on5op1: "Vyras",
    on5op2: "Moteris",
    on5op3: "Kitas",
    //Partneris
    on6tit: "Pasirinkite savo partnerį",
    //Partnerio vardas
    on7tit: "Nustatykite personažo vardą?",
    on7subt: "Nustatyti vardą",
    //Pritaikykite asmenybę
    on8tit: "Pritaikykite savo asmenybę",
    on8sub11: "Drovi",
    on8sub12: "Flirtuojanti",
    on8sub21: "Liūdna",
    on8sub22: "Laiminga",
    on8sub31: "Juokinga",
    on8sub32: "Mistinė",
    //Jūsų tikslai
    on9tit: "Pasirinkite savo tikslus?",
    on9op1: "Vaidybiniai nuotykiai",
    on9op2: "Flirtas ir pasimatymai",
    on9op3: "Žaisti su draugais",
    on9op4: "Mažiau jaustis vienišas",
    on9op5: "Linksmai leisti laiką",
    //Laisvalaikio leidimas
    on10tit: "Kaip leidžiate laisvalaikį?",
    on10op1: "Žaisti žaidimus",
    on10op2: "Skaityti knygas",
    on10op3: "Klausytis muzikos",
    on10op4: "Susipažinti su žmonėmis",
    on10op5: "Mėgautis vienišumu",
    //Laikraštis
    on11tit: "12 756 980 vyrai ir moterys jau patyrė dirbti turėdami dirbti su dirbtine intelekta nauda.",
    //Galinės apžvalgos
    on12rev1: "Radau žaidimą, kuris tikrai smagus",
    on12rev2: "Ši programa nuostabi ir priklauso",
    on12rev3: "Šį žaidimą žaidžiu kasdien!",
    on12tit1: "Baigiama dirbtinio intelekto draugo kūrimas",
    on12tit2: "Stiprinamas prisirišimas",
    on12tit3: "Pridedant jūsų pritaikymą",
    //Pajamų kategorija
    onrevtit: "Gaukite Premium",
    onrevop1: "Neribotas pokalbis",
    onrevop2: "Neriboti šūviai",
    onrevop3: "Gaukite Neribotus Premium personažus",
    onrevop4: "Greitesni atsakymo laikai",
    onrevop5: "Pirmumo prieiga",
    onrevaccess: "Pilna prieiga už",
    onrevannl: "Metinis",
    onrevmthly: "Mėnesinis",
    onrevweekly: "Savaitės",
    onrevdis: "33% NUOLAIDA",
    onrevcont: "Tęsti",
    //Pagrindinis puslapis
    onhtitle: "Jums",
    onhcat: "Jūsų domina kategorijos",
    ontoday: "Šiandien jums",
    ontodaysub: "Panašūs pasakojimai į tuos, kurie jums patiko",
    ondaily: "Kasdieninė seansa",
    ondailysub: "Ištirti kažką labai unikalaus",
    onfav: "Atraskite mėgstamiausius",
    onfavsub: "Tai nuostabu",
    ontrend: "Tyrimo tendencijos",
    ontrendsub: "Raskite tendencijas",
    onsteamy: "Garų karštas",
    onsteamysub: "Suteiks jums tingly pojūčius",
    //Žiebtuvėlio sutapimas
    ontindertitle: "Tai sutapimas",
    ontindersub: "Jūsų užburiamas žinutes laukia",
    ontinderchat: "Šnekėkite dabar",
    //Rekomenduojami personažai
    onchartitle: "Rekomenduojama",
    //Pokalbis
    onchatitle: "Prisiminkite: viskas, ką veikėjai sako, yra suklastotas",
    onchatplacehlder: "Įveskite žinutę...",
    //Meniu
    chats: "Pokalbiai",
    foryou: "Jums",
    explore: "Tyrinėti"
    ,gift: "Dovana jums",
    getnow: "Gaukite dabar",
    yourgift: "Jūsų dovaną"
  }
}
,

no: {
  translation: {
      // Tema
      done: "Ferdig",
      skip: "Hopp over",
      next: "Neste",
      continueplaying: "Fortsett å spille",
      whatsinside: "Hva er inni?",
      // Opplevelse
      wel1: "Spill historier etter eget valg",
      sub1: "Dette spillet lar deg slippe fantasien løs med moro",
      wel2: "Din tilpasning",
      sub2: "Vi sørger for at du får det beste ut av det",
      wel3: "Ubegrensede karakterer",
      sub3: "Snakk med ubegrensede karakterer",
      // Kategori for spilling
      on1tit: "Vennligst velg kategorien du er interessert i å spille",
      on1op1: "Kjærlighet",
      on1op2: "Eventyr",
      on1op3: "Romantikk",
      on1op4: "Morosaker",
      on1op5: "Mysterium",
      // Tilpassing av nummer
      on2tit: "Tilpass historien",
      // Navn
      on3tit: "Ditt navn?",
      on3textname: "Skriv inn navnet ditt",
      // Alder
      on4tit: "Din alder?",
      // Kjønn
      on5tit: "Vennligst velg ditt kjønn?",
      on5op1: "Mann",
      on5op2: "Kvinne",
      on5op3: "Annet",
      // Partner
      on6tit: "Velg din partner",
      // Navn på partner
      on7tit: "Angi karakterens navn?",
      on7subt: "Angi navn",
      // Tilpass din personlighet
      on8tit: "Tilpass din personlighet",
      on8sub11: "Sjenert",
      on8sub12: "Flørtende",
      on8sub21: "Trist",
      on8sub22: "Glad",
      on8sub31: "Morsom",
      on8sub32: "Mystisk",
      // Dine mål
      on9tit: "Velg dine mål?",
      on9op1: "Rollespill-eventyr",
      on9op2: "Flørting og datering",
      on9op3: "Spill med venner",
      on9op4: "Føl deg mindre ensom",
      on9op5: "Ha det gøy",
      // Bruk av fritid
      on10tit: "Hvordan bruker du din fritid?",
      on10op1: "Spiller spill",
      on10op2: "Leser bøker",
      on10op3: "Lytter til musikk",
      on10op4: "Møter folk",
      on10op5: "Nyt å være alene",
      // Avis
      on11tit: "12 756 980 menn og kvinner har allerede erfart fordelene med å ha AI i livet sitt",
      // Endelig lasting av anmeldelser
      on12rev1: "Fant et spill som er så gøy",
      on12rev2: "Appen er fantastisk og vanedannende",
      on12rev3: "Spiller dette spillet hver dag!",
      on12tit1: "Fullfører AI-vennens opprettelse",
      on12tit2: "Øker hengivenheten",
      on12tit3: "Legger til din personliggjøring",
      // Revenuecat
      onrevtit: "Få Premium",
      onrevop1: "Ubegrenset chat",
      onrevop2: "Ubegrenset sveiping",
      onrevop3: "Få ubegrensede premiumkarakterer",
      onrevop4: "Raskere responstider",
      onrevop5: "Prioritert tilgang",
      onrevaccess: "Full tilgang for kun",
      onrevannl: "Årlig",
      onrevmthly: "Månedlig",
      onrevweekly: "Ukentlig",
      onrevdis: "33% AVSLAG",
      onrevcont: "Fortsett",
      // Hjem
      onhtitle: "For deg",
      onhcat: "Kategorier du er interessert i",
      ontoday: "I dag for deg",
      ontodaysub: "Lignende historier som de du likte",
      ondaily: "Daglig økt",
      ondailysub: "Utforsk noe helt unikt",
      onfav: "Oppdag favoritter",
      onfavsub: "Dette er fantastiske",
      ontrend: "Utforsk trender",
      ontrendsub: "Finn ut hva som er i vinden",
      onsteamy: "Steam Red Hot",
      onsteamysub: "Vil gi deg kriblende følelser",
      // Tinder-kamp
      ontindertitle: "Det er en match",
      ontindersub: "Din forelskelse venter på meldingen din",
      ontinderchat: "Chat nå",
      // Anbefalte karakterer
      onchartitle: "Anbefalt",
      // Chat
      onchatitle: "Husk: Alt karakterene sier er oppdiktet",
      onchatplacehlder: "Skriv en melding...",
      // Meny
      chats: "Chatter",
      foryou: "For deg",
      explore: "Utforsk",
      gift: "Gave til deg",
      getnow: "Få den nå",
      yourgift: "Din gave",
  },
},


ro: {
  translation: {
    // Tema
    done: "Terminat",
    skip: "Sari peste",
    next: "Următorul",
    continueplaying: "Continuă jocul",
    whatsinside: "Ce este înăuntru?",
    // Onboarding
    wel1: "Joacă Povești După Alegerea Ta",
    sub1: "Acest joc îți permite să îți folosești imaginația cu distracție",
    wel2: "Personalizarea Ta",
    sub2: "Ne asigurăm că obții ce e mai bun",
    wel3: "Personaje Nelimitate",
    sub3: "Vorbește cu personaje nelimitate",
    // Joacă în Categoriile
    on1tit: "Te rugăm să alegi categoria care te interesează",
    on1op1: "Dragoste",
    on1op2: "Aventură",
    on1op3: "Romantic",
    on1op4: "Distracție",
    on1op5: "Mister",
    // Personalizarea Povestirii
    on2tit: "Personalizarea Povestirii",
    // Nume
    on3tit: "Numele Tău?",
    on3textname: "Introdu Numele Tău",
    // Vârstă
    on4tit: "Vârsta Ta?",
    // Gen
    on5tit: "Te rog selectează genul tău?",
    on5op1: "Bărbat",
    on5op2: "Femeie",
    on5op3: "Altul",
    // Partener
    on6tit: "Alege-ți Partenerul",
    // Numele Partenerului
    on7tit: "Setează Numele Personajului?",
    on7subt: "Setează Numele",
    // Personalizarea Personalității
    on8tit: "Personalizează-ți Personalitatea",
    on8sub11: "Timid",
    on8sub12: "Flirt",
    on8sub21: "Trist",
    on8sub22: "Vesel",
    on8sub31: "Amuzant",
    on8sub32: "Misterios",
    // Obiectivele Tale
    on9tit: "Selectează-ți Obiectivele",
    on9op1: "Aventuri de joc de rol",
    on9op2: "Flirt și întâlniri",
    on9op3: "Joacă cu prietenii",
    on9op4: "Simte-te mai puțin singur",
    on9op5: "Distrează-te",
    // Timpul Liber
    on10tit: "Cum îți petreci timpul liber?",
    on10op1: "Jocuri",
    on10op2: "Citește cărți",
    on10op3: "Ascultă muzică",
    on10op4: "Întâlnește oameni",
    on10op5: "Bucură-te de singurătate",
    // Ziar
    on11tit: "12.756.980 bărbați și femei au experimentat deja beneficiile de a avea un AI în viața lor",
    // Revizuiri Finale
    on12rev1: "Am găsit un joc atât de distractiv",
    on12rev2: "Aplicația este uimitoare și captivantă",
    on12rev3: "Jocul acesta îl joc în fiecare zi!",
    on12tit1: "Finalizarea creării prietenului AI",
    on12tit2: "Creșterea afecțiunii",
    on12tit3: "Adăugarea personalizării tale",
    // Revenuecat
    onrevtit: "Obține Premium",
    onrevop1: "Chat nelimitat",
    onrevop2: "Glisări nelimitate",
    onrevop3: "Obțineți personaje premium nelimitate",
    onrevop4: "Timp de răspuns mai rapid",
    onrevop5: "Acces prioritar",
    onrevaccess: "Acces complet doar pentru",
    onrevannl: "Anual",
    onrevmthly: "Lunar",
    onrevweekly: "Săptămânal",
    onrevdis: "33% REDUCERE",
    onrevcont: "Continuă",
    // Acasă
    onhtitle: "Pentru Tine",
    onhcat: "Categorii care te interesează",
    ontoday: "Astăzi pentru tine",
    ontodaysub: "Povestiri similare cu cele pe care le-ai plăcut",
    ondaily: "Sesiune zilnică",
    ondailysub: "Explorează ceva unic",
    onfav: "Descoperă Favorite",
    onfavsub: "Acestea sunt cele uimitoare",
    ontrend: "Explorează Tendințele",
    ontrendsub: "Află ce este în tendință",
    onsteamy: "Steam Roșu Aprins",
    onsteamysub: "Îți va oferi senzații tari",
    // Potrivire Tinder
    ontindertitle: "Este o Potrivire",
    ontindersub: "Crush-ul tău așteaptă mesajul tău",
    ontinderchat: "Chat Acum",
    // Listă de Personaje
    onchartitle: "Recomandate",
    // Chat
    onchatitle: "Amintește-ți: Tot ce spun personajele este fictiv",
    onchatplacehlder: "Scrie un mesaj...",
    // Meniu
    chats: "Chat-uri",
    foryou: "Pentru tine",
    explore: "Explorează",
    gift: "Cadou pentru tine",
    getnow: "Ia-l acum",
    yourgift: "Cadoul tău",
  },
},


sr: {
  translation: {
      // Tema
      done: "Završeno",
      skip: "Preskoči",
      next: "Sledeće",
      continueplaying: "Nastavi igranje",
      whatsinside: "Šta je unutra?",
      // Na početku
      wel1: "Igrajte priče po svojoj želji",
      sub1: "Ova igra vam omogućava da pustite mašti na volju sa zabavom",
      wel2: "Vaša personalizacija",
      sub2: "Mi se pobrinemo da dobijete najbolje iz toga",
      wel3: "Neograničeni likovi",
      sub3: "Razgovarajte sa neograničenim brojem likova",
      // Igranje kategorija
      on1tit: "Molimo vas da odaberete kategoriju koja vas zanima za igru",
      on1op1: "Ljubav",
      on1op2: "Avantura",
      on1op3: "Romantika",
      on1op4: "Zabava",
      on1op5: "Misterija",
      // Prilagođavanje brojeva
      on2tit: "Prilagođavanje priče",
      // Ime
      on3tit: "Vaše ime?",
      on3textname: "Unesite svoje ime",
      // Godine
      on4tit: "Vaša starost?",
      // Pol
      on5tit: "Molimo vas da odaberete svoj pol?",
      on5op1: "Muški",
      on5op2: "Ženski",
      on5op3: "Drugo",
      // Partner
      on6tit: "Izaberite svog partnera",
      // Ime partnera
      on7tit: "Postavite ime lika?",
      on7subt: "Postavite ime",
      // Prilagodite ličnost
      on8tit: "Prilagodite svoju ličnost",
      on8sub11: "Stidljiv",
      on8sub12: "Flertujući",
      on8sub21: "Tužno",
      on8sub22: "Srećno",
      on8sub31: "Smešno",
      on8sub32: "Misteriozno",
      // Vaši ciljevi
      on9tit: "Izaberite svoje ciljeve?",
      on9op1: "Role-Play avanture",
      on9op2: "Flertovanje i dejtovi",
      on9op3: "Igranje sa prijateljima",
      on9op4: "Osećati se manje usamljeno",
      on9op5: "Zabavljati se",
      // Slobodno vreme
      on10tit: "Kako provodite svoje slobodno vreme?",
      on10op1: "Igranje igara",
      on10op2: "Čitanje knjiga",
      on10op3: "Slušanje muzike",
      on10op4: "Upoznavanje ljudi",
      on10op5: "Uživanje u samoći",
      // Novine
      on11tit: "12.756.980 muškaraca i žena već je iskusilo prednosti imati AI u svom životu",
      // Krajnje učitavanje recenzija
      on12rev1: "Pronašao sam igru koja je toliko zabavna",
      on12rev2: "Aplikacija je neverovatna i zarazna",
      on12rev3: "Svaki dan igram ovu igru!",
      on12tit1: "Dovršavanje kreiranja AI prijatelja",
      on12tit2: "Povećanje privrženosti",
      on12tit3: "Dodavanje vaše personalizacije",
      // Revenuecat
      onrevtit: "Pribavite Premium",
      onrevop1: "Neograničen čet",
      onrevop2: "Neograničeni pretraživanje",
      onrevop3: "Dobijte neograničene Premium likove",
      onrevop4: "Brže vreme odgovora",
      onrevop5: "Prioritetni pristup",
      onrevaccess: "Puna pristup samo za",
      onrevannl: "Godišnje",
      onrevmthly: "Mesečno",
      onrevweekly: "Nedeljno",
      onrevdis: "33% POPUST",
      onrevcont: "Nastavi",
      // Domaća stranica
      onhtitle: "Za vas",
      onhcat: "Kategorije koje vas zanimaju",
      ontoday: "Danas za vas",
      ontodaysub: "Slične priče kao one koje ste voleli",
      ondaily: "Dnevna sesija",
      ondailysub: "Istražite nešto potpuno jedinstveno",
      onfav: "Otkrijte omiljene",
      onfavsub: "Ovo su neverovatni",
      ontrend: "Istražite trendove",
      ontrendsub: "Saznajte o trendovima",
      onsteamy: "Parni crveni vruće",
      onsteamysub: "Daće vam trnjenje čula",
      // Tindermatch
      ontindertitle: "To je podudaranje",
      ontindersub: "Vaša simpatija čeka vašu poruku",
      ontinderchat: "Ćaskajte sada",
      // Lista likova
      onchartitle: "Preporučeno",
      // Čet
      onchatitle: "Zapamtite: Sve što likovi kažu je izmišljeno",
      onchatplacehlder: "Unesite poruku...",
      // Meni
      chats: "Ćaskanje",
      foryou: "Za tebe",
      explore: "Istraži",
      gift: "Poklon za tebe",
      getnow: "Dobij to sada",
      yourgift: "Tvoj poklon",
  },
},


sk: {
  translation: {
    //Téma
    done: "Hotovo",
    skip: "Preskočiť",
    next: "Ďalšie",
    continueplaying: "Pokračovať v hraní",
    whatsinside: "Čo je v strede?",
    //Nástup
    wel1: "Hrajte príbehy podľa vášho výberu",
    sub1: "Táto hra vám umožní nechať divokou svoju predstavivosť a zabaviť sa.",
    wel2: "Vaša personalizácia",
    sub2: "Postaráme sa, aby ste z toho dostali to najlepšie.",
    wel3: "Neobmedzené postavy",
    sub3: "Hovorte s neobmedzeným počtom postáv.",
    //Hranie v kategórii
    on1tit: "Prosím, vyberte kategóriu, ktorá vás zaujíma",
    on1op1: "Láska",
    on1op2: "Dobrodružstvo",
    on1op3: "Romantika",
    on1op4: "Zábava",
    on1op5: "Mysteriózne",
    //Pripomienky
    on2tit: "Prispôsobte príbeh",
    //Meno
    on3tit: "Vaše meno?",
    on3textname: "Zadajte svoje meno",
    //Vek
    on4tit: "Váš vek?",
    //Pohlavie
    on5tit: "Prosím, vyberte svoje pohlavie",
    on5op1: "Muž",
    on5op2: "Žena",
    on5op3: "Iné",
    //Partner
    on6tit: "Vyberte si partnera",
    //Meno partnera
    on7tit: "Nastaviť meno postavy?",
    on7subt: "Nastaviť meno",
    //Prispôsobte svoju osobnosť
    on8tit: "Prispôsobte svoju osobnosť",
    on8sub11: "Stiahnutý",
    on8sub12: "Flirtovat",
    on8sub21: "Smutný",
    on8sub22: "Šťastný",
    on8sub31: "Vtipný",
    on8sub32: "Záhadný",
    //Vaše ciele
    on9tit: "Vyberte si svoje ciele?",
    on9op1: "Hrať rolu dobrodružstiev",
    on9op2: "Flirtovať a randiť",
    on9op3: "Hrať s priateľmi",
    on9op4: "Cítiť sa menej osamelý",
    on9op5: "Zabavte sa",
    //Ako trávite voľný čas
    on10tit: "Ako trávite voľný čas?",
    on10op1: "Hrať hry",
    on10op2: "Čítať knihy",
    on10op3: "Počúvať hudbu",
    on10op4: "Spoznávať ľudí",
    on10op5: "Užívať si osamote",
    //Noviny
    on11tit: "12 756 980 mužov a žien už zažilo výhody mať AI vo svojom živote",
    //Posledné načítanie recenzií
    on12rev1: "Našiel som hru, ktorá je veľmi zábavná",
    on12rev2: "Táto aplikácia je úžasná a návyková",
    on12rev3: "Hrávam túto hru každý deň!",
    on12tit1: "Dokončovanie vytvárania AI priateľa",
    on12tit2: "Zvyšovanie náklonnosti",
    on12tit3: "Pridávanie vašej personalizácie",
    //Prémiová kategória
    onrevtit: "Získať prémiový prístup",
    onrevop1: "Neobmedzený chat",
    onrevop2: "Neobmedzené gestá",
    onrevop3: "Získajte neobmedzený prémiový obsah",
    onrevop4: "Rýchlejšie odpovede",
    onrevop5: "Prednosťový prístup",
    onrevaccess: "Plný prístup len za",
    onrevannl: "Ročný",
    onrevmthly: "Mesačný",
    onrevweekly: "Týždenný",
    onrevdis: "33% ZĽAVA",
    onrevcont: "Pokračovať",
    //Domov
    onhtitle: "Pre vás",
    onhcat: "Kategórie, ktoré vás zaujímajú",
    ontoday: "Dnes pre vás",
    ontodaysub: "Podobné príbehy tým, ktoré sa vám páčili",
    ondaily: "Denná relácia",
    ondailysub: "Preskúmajte niečo veľmi jedinečné",
    onfav: "Objavte obľúbené",
    onfavsub: "Tieto sú úžasné",
    ontrend: "Preskúmajte trendy",
    ontrendsub: "Zistite, aké sú trendy",
    onsteamy: "Parný horúci",
    onsteamysub: "Prinesie vám vzrušujúce pocity",
    //Zhoda na Tinderi
    ontindertitle: "Je to zhoda",
    ontindersub: "Váš obľúbený čaká na vašu správu",
    ontinderchat: "Chatujte teraz",
    //Zoznam postáv
    onchartitle: "Odporúčané",
    //Chat
    onchatitle: "Pamätajte si: Všetko, čo postavy hovoria, je vymyslené",
    onchatplacehlder: "Napísať správu...",
    //Menu
    chats: "Chaty",
    foryou: "Pre vás",
    explore: "Preskúmať",
    gift: "Darček pre vás",
    getnow: "Získať teraz",
    yourgift: "Váš darček"
  }
}
,

sl: {
  translation: {
      // Tema
      done: "Končano",
      skip: "Preskoči",
      next: "Naprej",
      continueplaying: "Nadaljuj z igranjem",
      whatsinside: "Kaj je notri?",
      // Načrtovanje
      wel1: "Igrajte zgodbe po svoji izbiri",
      sub1: "Ta igra vam omogoča, da pustite domišljijo na plano s zabavo",
      wel2: "Vaša prilagoditev",
      sub2: "Poskrbimo, da boste dobili najboljše iz tega",
      wel3: "Neomejeno število likov",
      sub3: "Pogovarjajte se z neomejenimi liki",
      // Igranje v kategoriji
      on1tit: "Izberite kategorijo, ki vas zanima",
      on1op1: "Ljubezen",
      on1op2: "Pustolovščina",
      on1op3: "Romantika",
      on1op4: "Zabava",
      on1op5: "Misterija",
      // Prilagajanje števila
      on2tit: "Prilagajanje zgodbe",
      // Ime
      on3tit: "Vaše ime?",
      on3textname: "Vnesite svoje ime",
      // Starost
      on4tit: "Vaša starost?",
      // Spol
      on5tit: "Prosimo, izberite svoj spol?",
      on5op1: "Moški",
      on5op2: "Ženska",
      on5op3: "Drugo",
      // Partner
      on6tit: "Izberite svojega partnerja",
      // Ime partnerja
      on7tit: "Nastavite ime lika?",
      on7subt: "Nastavite ime",
      // Prilagodite svojo osebnost
      on8tit: "Prilagodite svojo osebnost",
      on8sub11: "Sramežljiv",
      on8sub12: "Flirtajoč",
      on8sub21: "Žalosten",
      on8sub22: "Srečen",
      on8sub31: "Zabaven",
      on8sub32: "Skrivnosten",
      // Vaši cilji
      on9tit: "Izberite svoje cilje?",
      on9op1: "Vloga-igra pustolovščin",
      on9op2: "Flirt in zmenki",
      on9op3: "Igrajte z prijatelji",
      on9op4: "Počutite se manj osamljeni",
      on9op5: "Se zabavajte",
      // Poraba prostega časa
      on10tit: "Kako porabite svoj prosti čas?",
      on10op1: "Igranje iger",
      on10op2: "Branje knjig",
      on10op3: "Poslušanje glasbe",
      on10op4: "Srečanje ljudi",
      on10op5: "Uživanje v samoti",
      // Novice
      on11tit: "12.756.980 moških in žensk je že izkusilo koristi uporabe AI v svojem življenju",
      // Končno nalaganje ocen
      on12rev1: "Našel sem igro, ki je tako zabavna",
      on12rev2: "Aplikacija je neverjetna in zasvoji",
      on12rev3: "Vsak dan igram to igro!",
      on12tit1: "Končno ustvarjanje AI prijatelja",
      on12tit2: "Povečanje naklonjenosti",
      on12tit3: "Dodajanje vaše prilagoditve",
      // Revenuecat
      onrevtit: "Pridobite premium",
      onrevop1: "Neomejen klepet",
      onrevop2: "Neomejeno povlečenje",
      onrevop3: "Pridobite neomejeno število premium znakov",
      onrevop4: "Hitrejši časi odziva",
      onrevop5: "Prednostni dostop",
      onrevaccess: "Polni dostop za samo",
      onrevannl: "Letno",
      onrevmthly: "Mesečno",
      onrevweekly: "Tedensko",
      onrevdis: "33% POPUST",
      onrevcont: "Nadaljuj",
      // Domov
      onhtitle: "Za vas",
      onhcat: "Kategorije, ki vas zanimajo",
      ontoday: "Danes za vas",
      ontodaysub: "Podobne zgodbe kot tiste, ki so vam bile všeč",
      ondaily: "Dnevna seja",
      ondailysub: "Raziščite nekaj edinstvenega",
      onfav: "Odkrijte priljubljene",
      onfavsub: "To so fantastične zgodbe",
      ontrend: "Raziščite trende",
      ontrendsub: "Odkrijte, kaj je v trendu",
      onsteamy: "Steam Red Hot",
      onsteamysub: "Vam bo dalo omamne občutke",
      // Tinder ujemanje
      ontindertitle: "To je ujemanje",
      ontindersub: "Vaša simpatija čaka na vaše sporočilo",
      ontinderchat: "Klepetaj zdaj",
      // Priporočeni znaki
      onchartitle: "Priporočeno",
      // Klepet
      onchatitle: "Spomnite se: Vse, kar liki rečejo, je izmišljeno",
      onchatplacehlder: "Vnesite sporočilo...",
      // Meni
      chats: "Klepeti",
      foryou: "Za vas",
      explore: "Razišči",
      gift: "Darilo za vas",
      getnow: "Pridobi ga zdaj",
      yourgift: "Vaše darilo",
  },
},

sw: {
  translation: {
    // Mandhari
    done: "Imekamilika",
    skip: "Ruka",
    next: "Ifuatayo",
    continueplaying: "Endelea Kucheza",
    whatsinside: "Kuna Nini Ndani?",
    // Kwenye Ubao
    wel1: "Cheza Hadithi za Uchaguzi Wako",
    sub1: "Mchezo huu unakuwezesha kutumia ubunifu wako kwa furaha",
    wel2: "Ubinafsishaji Wako",
    sub2: "Tunahakikisha unapata kilicho bora zaidi",
    wel3: "Watu Wasio na Mwisho",
    sub3: "Zungumza na Watu Wasio na Mwisho",
    // Kuchagua Jamii
    on1tit: "Tafadhali Chagua Jamii Unayopendezwa Nayo",
    on1op1: "Upendo",
    on1op2: "Mshindo",
    on1op3: "Upendo",
    on1op4: "Furaha",
    on1op5: "Mistari",
    // Kubinafsisha Hadithi
    on2tit: "Kubinafsisha Hadithi",
    // Jina
    on3tit: "Jina Lako?",
    on3textname: "Ingiza Jina Lako",
    // Umri
    on4tit: "Umri Wako?",
    // Jinsia
    on5tit: "Tafadhali Chagua Jinsia Yako?",
    on5op1: "Kiume",
    on5op2: "Kike",
    on5op3: "Nyingine",
    // Mshirika
    on6tit: "Chagua Mshirika Wako",
    // Jina la Mshirika
    on7tit: "Weka Jina la Tabia?",
    on7subt: "Weka Jina",
    // Kubinafsisha Utu
    on8tit: "Binafsisha Utu Wako",
    on8sub11: "Mwenye Shyness",
    on8sub12: "Mpenzi",
    on8sub21: "Mwenye Huzuni",
    on8sub22: "Mwenye Furaha",
    on8sub31: "Mpenda Utani",
    on8sub32: "Mwenzekaji",
    // Malengo Yako
    on9tit: "Chagua Malengo Yako?",
    on9op1: "Maigizo ya Majukumu",
    on9op2: "Flirt na Tarehe",
    on9op3: "Cheza na Marafiki",
    on9op4: "Hisi Ukiwa na Ukaribu Zaidi",
    on9op5: "Furahi",
    // Jinsi Unavyopoteza Wakati Wako wa Burudani
    on10tit: "Unatumiaje Wakati Wako wa Burudani?",
    on10op1: "Cheza Michezo",
    on10op2: "Soma Vitabu",
    on10op3: "Sikiliza Muziki",
    on10op4: "Kutana na Watu",
    on10op5: "Furahia Ukiwa Pekee",
    // Gazeti
    on11tit: "Wanaume na wanawake 12,756,980 tayari wamefaidika na kuwa na AI katika maisha yao",
    // Mapitio ya Mwisho ya Kupakia
    on12rev1: "Nimegundua mchezo ambao ni wa kufurahisha sana",
    on12rev2: "Programu hii ni nzuri sana na inavuta",
    on12rev3: "Kucheza mchezo huu kila siku!",
    on12tit1: "Kukamilisha Uundaji wa Rafiki wa AI",
    on12tit2: "Kuongeza Upendo",
    on12tit3: "Kuongeza Ubinafsishaji Wako",
    // Revenuecat
    onrevtit: "Pata Premium",
    onrevop1: "Mazungumzo Bila Kikomo",
    onrevop2: "Kupiga Chati Bila Kikomo",
    onrevop3: "Pata Wahusika wa Premium Bila Kikomo",
    onrevop4: "Nyakati za Kujibu Haraka Zaidi",
    onrevop5: "Kupata Kipaumbele",
    onrevaccess: "Upatikanaji kamili kwa tu",
    onrevannl: "Kila mwaka",
    onrevmthly: "Kila mwezi",
    onrevweekly: "Kila wiki",
    onrevdis: "Punguzo la 33%",
    onrevcont: "Endelea",
    // Nyumbani
    onhtitle: "Kwa Ajili Yako",
    onhcat: "Jamii unazopendezwa nazo",
    ontoday: "Leo kwa ajili yako",
    ontodaysub: "Hadithi sawa na zile ulizozipenda",
    ondaily: "Kikao cha Kila Siku",
    ondailysub: "Gundua kitu cha kipekee",
    onfav: "Gundua Vipendwa",
    onfavsub: "Hivi ni vya kushangaza",
    ontrend: "Gundua Kinachosumbua",
    ontrendsub: "Jua kinachoendelea",
    onsteamy: "Steam Nyekundu Moto",
    onsteamysub: "Itakupa hisia kali",
    // Kulingana na Pendekezo la Tinder
    ontindertitle: "Ni Kulingana",
    ontindersub: "Crush wako anasubiri ujumbe wako",
    ontinderchat: "Chat Sasa",
    // Orodha ya Wahusika
    onchartitle: "Inapendekezwa",
    // Mazungumzo
    onchatitle: "Kumbuka: Kila kitu ambacho wahusika wanasema ni uongo",
    onchatplacehlder: "Andika ujumbe...",
    // Menyu
    chats: "Mazungumzo",
    foryou: "Kwa ajili yako",
    explore: "Gundua",
    gift: "Zawadi kwa ajili yako",
    getnow: "Pata sasa",
    yourgift: "Zawadi yako",
  },
},


sv: {
  translation: {
      // Tema
      done: "Klar",
      skip: "Hoppa över",
      next: "Nästa",
      continueplaying: "Fortsätt spela",
      whatsinside: "Vad finns inuti?",
      // Introduktion
      wel1: "Spela Berättelser efter ditt val",
      sub1: "Det här spelet låter dig släppa loss din fantasi och ha kul",
      wel2: "Din Anpassning",
      sub2: "Vi ser till att du får det bästa ut av det",
      wel3: "Obegränsade karaktärer",
      sub3: "Prata med obegränsat antal karaktärer",
      // Kategori
      on1tit: "Vänligen välj kategori du är intresserad av att spela",
      on1op1: "Kärlek",
      on1op2: "Äventyr",
      on1op3: "Romantik",
      on1op4: "Roligt",
      on1op5: "Mysterium",
      // Anpassa
      on2tit: "Anpassa berättelsen",
      // Namn
      on3tit: "Ditt namn?",
      on3textname: "Ange ditt namn",
      // Ålder
      on4tit: "Din ålder?",
      // Kön
      on5tit: "Vänligen välj ditt kön?",
      on5op1: "Man",
      on5op2: "Kvinna",
      on5op3: "Annat",
      // Partner
      on6tit: "Välj din partner",
      // Partners namn
      on7tit: "Ange karaktärens namn?",
      on7subt: "Ange namn",
      // Anpassa personlighet
      on8tit: "Anpassa din personlighet",
      on8sub11: "Blyg",
      on8sub12: "Flörtig",
      on8sub21: "Sorgsen",
      on8sub22: "Lycklig",
      on8sub31: "Rolig",
      on8sub32: "Mysteriös",
      // Dina mål
      on9tit: "Välj dina mål?",
      on9op1: "Rollspelsäventyr",
      on9op2: "Flörta och gå på dejter",
      on9op3: "Spela med vänner",
      on9op4: "Känna dig mindre ensam",
      on9op5: "Ha kul",
      // Fritid
      on10tit: "Hur spenderar du din fritid?",
      on10op1: "Spela spel",
      on10op2: "Läsa böcker",
      on10op3: "Lyssna på musik",
      on10op4: "Möta människor",
      on10op5: "Njut av ensamheten",
      // Nyheter
      on11tit: "12 756 980 män och kvinnor har redan upplevt fördelarna med att ha en AI i sitt liv",
      // Sista recensioner
      on12rev1: "Hittade ett spel som är så roligt",
      on12rev2: "Appen är fantastisk och beroendeframkallande",
      on12rev3: "Spelar det här spelet varje dag!",
      on12tit1: "Avslutar skapandet av AI-vän",
      on12tit2: "Ökar kärleken",
      on12tit3: "Lägger till din anpassning",
      // Revenuecat
      onrevtit: "Få Premium",
      onrevop1: "Obegränsad chatt",
      onrevop2: "Obegränsade svepningar",
      onrevop3: "Få obegränsade Premium-karaktärer",
      onrevop4: "Snabbare svarstider",
      onrevop5: "Prioriterad åtkomst",
      onrevaccess: "Full åtkomst för endast",
      onrevannl: "Årlig",
      onrevmthly: "Månatlig",
      onrevweekly: "Veckovis",
      onrevdis: "33% RABATT",
      onrevcont: "Fortsätt",
      // Hem
      onhtitle: "För dig",
      onhcat: "Kategorier du är intresserad av",
      ontoday: "Idag för dig",
      ontodaysub: "Liknande berättelser som de du gillade",
      ondaily: "Daglig session",
      ondailysub: "Utforska något helt unikt",
      onfav: "Upptäck favoriter",
      onfavsub: "Dessa är fantastiska",
      ontrend: "Utforska trender",
      ontrendsub: "Ta reda på de trendande",
      onsteamy: "Ånga Rött Hett",
      onsteamysub: "Kommer att ge dig pirrande känslor",
      // Tindermatch
      ontindertitle: "Det är en matchning",
      ontindersub: "Din förälskelse väntar på ditt meddelande",
      ontinderchat: "Chatta nu",
      // Karaktärslista
      onchartitle: "Rekommenderad",
      // Chatt
      onchatitle: "Kom ihåg: Allt karaktärerna säger är påhittat",
      onchatplacehlder: "Skriv ett meddelande...",
      // Meny
      chats: "Chattar",
      foryou: "För dig",
      explore: "Utforska",
      gift: "Gåva till dig",
      getnow: "Få det nu",
      yourgift: "Din gåva",
  },
},


"uk": {
  "translation": {
    //Тема
    done: "Завершено",
    skip: "Пропустити",
    next: "Далі",
    continueplaying: "Продовжити грати",
    whatsinside: "Що всередині?",
    //Настановлення
    wel1: "Грайте в історії за власним вибором",
    sub1: "Ця гра дозволяє вам дати волю своїй уяві та отримати задоволення від розваги.",
    wel2: "Ваша персоналізація",
    sub2: "Ми переконуємося, що ви отримуєте найкраще з цього.",
    wel3: "Необмежена кількість персонажів",
    sub3: "Розмовляйте з необмеженою кількістю персонажів.",
    //Гра в категорії
    on1tit: "Будь ласка, виберіть категорію, яка вас цікавить",
    on1op1: "Любов",
    on1op2: "Пригоди",
    on1op3: "Романтика",
    on1op4: "Розваги",
    on1op5: "Містика",
    //Налаштування
    on2tit: "Налаштування історії",
    //Ім'я
    on3tit: "Ваше ім'я?",
    on3textname: "Введіть своє ім'я",
    //Вік
    on4tit: "Ваш вік?",
    //Стать
    on5tit: "Будь ласка, виберіть вашу стать",
    on5op1: "Чоловік",
    on5op2: "Жінка",
    on5op3: "Інше",
    //Партнер
    on6tit: "Виберіть свого партнера",
    //Ім'я партнера
    on7tit: "Встановити ім'я персонажа?",
    on7subt: "Встановити ім'я",
    //Налаштування особистості
    on8tit: "Налаштуйте свою особистість",
    on8sub11: "Сором'язливий",
    on8sub12: "Флірт",
    on8sub21: "Сумний",
    on8sub22: "Щасливий",
    on8sub31: "Смішний",
    on8sub32: "Загадковий",
    //Ваші цілі
    on9tit: "Оберіть свої цілі?",
    on9op1: "Рольові пригоди",
    on9op2: "Флірт та побачення",
    on9op3: "Грайте з друзями",
    on9op4: "Відчувайте себе менш самотнім",
    on9op5: "Маєте веселощі",
    //Вільний час
    on10tit: "Як ви проводите вільний час?",
    on10op1: "Грати в ігри",
    on10op2: "Читати книги",
    on10op3: "Слухати музику",
    on10op4: "Зустрічати нових людей",
    on10op5: "Насолоджуватися самотністю",
    //Газета
    on11tit: "12 756 980 чоловіків і жінок вже випробували переваги наявності штучного інтелекту в їхньому житті",
    //Завершення завантаження відгуків
    on12rev1: "Знайшов гру, яка дуже весела",
    on12rev2: "Додаток дивовижний і надто привабливий",
    on12rev3: "Граю в цю гру кожен день!",
    on12tit1: "Завершення створення іскусственого друга",
    on12tit2: "Підвищення прихильності",
    on12tit3: "Додавання вашої персоналізації",
    //Програма оплати
    onrevtit: "Отримати преміум",
    onrevop1: "Необмежений чат",
    onrevop2: "Необмежені свайпи",
    onrevop3: "Отримати необмежений преміум-контент",
    onrevop4: "Швидші відповіді",
    onrevop5: "Перевага доступу",
    onrevaccess: "Повний доступ всього за",
    onrevannl: "Щорічно",
    onrevmthly: "Щомісяця",
    onrevweekly: "Щотижня",
    onrevdis: "ЗНИЖКА 33%",
    onrevcont: "Продовжити",
    //Для вас
    onhtitle: "Для вас",
    onhcat: "Категорії, які вас цікавлять",
    ontoday: "Сьогодні для вас",
    ontodaysub: "Схожі історії на ті, які вам сподобалися",
    ondaily: "Щоденна сесія",
    ondailysub: "Досліджуйте щось цілком унікальне",
    onfav: "Відкривайте улюблене",
    onfavsub: "Це дивовижно",
    ontrend: "Досліджуйте популярність",
    ontrendsub: "Дізнайтеся про популярні історії",
    onsteamy: "Вогонь-вогонь",
    onsteamysub: "Збудить ваші почуття",
    //Пара на "Тіндр"
    ontindertitle: "Це збіг",
    ontindersub: "Ваша вибрана особа чекає на ваше повідомлення",
    ontinderchat: "Чат зараз",
    //Список персонажів
    onchartitle: "Рекомендовані",
    //Чат
    onchatitle: "Пам'ятайте: Все, що говорять персонажі, це вигадка",
    onchatplacehlder: "Введіть повідомлення...",
    //Меню
    chats: "Чати",
    foryou: "Для вас",
    explore: "Досліджувати",
    gift: "Подарунок для вас",
    getnow: "Отримати зараз",
    yourgift: "Ваш подарунок"
  }
}
,

vi: {
  translation: {
      // Chủ đề
      done: "Hoàn tất",
      skip: "Bỏ qua",
      next: "Tiếp",
      continueplaying: "Tiếp tục chơi",
      whatsinside: "Bên trong là gì?",
      // Onboarding
      wel1: "Chơi các câu chuyện mà bạn thích",
      sub1: "Trò chơi này cho phép bạn tự do sáng tạo và trải nghiệm niềm vui",
      wel2: "Cá nhân hóa của bạn",
      sub2: "Chúng tôi đảm bảo bạn nhận được tốt nhất",
      wel3: "Số lượng nhân vật không giới hạn",
      sub3: "Nói chuyện với bất kỳ nhân vật nào",
      // Chọn chơi theo danh mục
      on1tit: "Vui lòng chọn danh mục bạn quan tâm",
      on1op1: "Tình yêu",
      on1op2: "Phiêu lưu",
      on1op3: "Lãng mạn",
      on1op4: "Vui vẻ",
      on1op5: "Bí ẩn",
      // Tùy chỉnh câu chuyện
      on2tit: "Tùy chỉnh câu chuyện",
      // Tên
      on3tit: "Tên của bạn?",
      on3textname: "Nhập tên của bạn",
      // Tuổi
      on4tit: "Tuổi của bạn?",
      // Giới tính
      on5tit: "Vui lòng chọn giới tính của bạn?",
      on5op1: "Nam",
      on5op2: "Nữ",
      on5op3: "Khác",
      // Đối tác
      on6tit: "Chọn đối tác của bạn",
      // Tên đối tác
      on7tit: "Đặt tên cho nhân vật?",
      on7subt: "Đặt tên",
      // Tùy chỉnh tính cách của bạn
      on8tit: "Tùy chỉnh tính cách của bạn",
      on8sub11: "Rụt rè",
      on8sub12: "Nói lắp",
      on8sub21: "Buồn",
      on8sub22: "Vui vẻ",
      on8sub31: "Hài hước",
      on8sub32: "Bí ẩn",
      // Chọn mục tiêu của bạn
      on9tit: "Chọn mục tiêu của bạn?",
      on9op1: "Phiêu lưu trong vai trò",
      on9op2: "Tán tỉnh và hẹn hò",
      on9op3: "Chơi với bạn bè",
      on9op4: "Cảm thấy ít cô đơn",
      on9op5: "Có thời gian vui vẻ",
      // Dành thời gian rảnh rỗi
      on10tit: "Bạn thường dành thời gian rảnh rỗi như thế nào?",
      on10op1: "Chơi trò chơi",
      on10op2: "Đọc sách",
      on10op3: "Nghe nhạc",
      on10op4: "Gặp gỡ bạn bè",
      on10op5: "Thích cô đơn",
      // Tin tức
      on11tit: "12.756.980 người đàn ông và phụ nữ đã trải nghiệm lợi ích của việc sở hữu trí tuệ nhân tạo trong cuộc sống của họ",
      // Xem xét cuối cùng
      on12rev1: "Tìm thấy một trò chơi thú vị",
      on12rev2: "Ứng dụng tuyệt vời và gây nghiện",
      on12rev3: "Chơi trò chơi này mỗi ngày!",
      on12tit1: "Hoàn tất việc tạo bạn bè trí tuệ nhân tạo",
      on12tit2: "Tăng tình cảm",
      on12tit3: "Thêm sự cá nhân hóa của bạn",
      // Revenuecat
      onrevtit: "Nhận bản Premium",
      onrevop1: "Chat không giới hạn",
      onrevop2: "Kéo không giới hạn",
      onrevop3: "Nhận nhân vật Premium không giới hạn",
      onrevop4: "Thời gian phản hồi nhanh hơn",
      onrevop5: "Truy cập ưu tiên",
      onrevaccess: "Truy cập đầy đủ chỉ với",
      onrevannl: "Hàng năm",
      onrevmthly: "Hàng tháng",
      onrevweekly: "Hàng tuần",
      onrevdis: "33% GIẢM GIÁ",
      onrevcont: "Tiếp tục",
      // Trang chủ
      onhtitle: "Dành cho bạn",
      onhcat: "Các danh mục bạn quan tâm",
      ontoday: "Hôm nay dành cho bạn",
      ontodaysub: "Câu chuyện tương tự với những cái bạn thích",
      ondaily: "Phiên hàng ngày",
      ondailysub: "Khám phá điều gì đó độc đáo",
      onfav: "Khám phá các câu chuyện yêu thích",
      onfavsub: "Những câu chuyện tuyệt vời",
      ontrend: "Khám phá xu hướng",
      ontrendsub: "Tìm hiểu những câu chuyện đang thịnh hành",
      onsteamy: "Nóng bỏng",
      onsteamysub: "Sẽ mang lại cho bạn cảm giác kích thích",
      // Tinder Match
      ontindertitle: "Đó là sự kết hợp",
      ontindersub: "Người bạn thích đang chờ tin nhắn của bạn",
      ontinderchat: "Chat ngay bây giờ",
      // Danh sách nhân vật
      onchartitle: "Đề xuất",
      // Cuộc trò chuyện
      onchatitle: "Nhớ rằng: Tất cả những gì nhân vật nói đều là hư cấu",
      onchatplacehlder: "Nhập một tin nhắn...",
      // Menu
      chats: "Cuộc trò chuyện",
      foryou: "Dành cho bạn",
      explore: "Khám phá",
      gift: "Quà tặng cho bạn",
      getnow: "Nhận ngay",
      yourgift: "Quà của bạn",
  },
},






  
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.locale, // use the user's locale
    fallbackLng: "en", // fallback to English if locale not available

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
