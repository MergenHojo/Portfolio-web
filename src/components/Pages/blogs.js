import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import mekdep1 from '../../img/postsimg/mekdep/sk1.jpg'
import mekdep3 from '../../img/postsimg/mekdep/sk0.jpg'
import mekdep2 from '../../img/postsimg/mekdep/sk2.jpg'

import ai1 from '../../img/postsimg/ai/ai1.jpg'
import ai2 from '../../img/postsimg/ai/ai2.jpg'
import ai3 from '../../img/postsimg/ai/ai3.jpg'

import mug1 from '../../img/postsimg/mug/teacher1.jpg'
import mug2 from '../../img/postsimg/mug/teacher2.jpg'
import mug3 from '../../img/postsimg/mug/teacher3.jpg'
import mug4 from '../../img/postsimg/mug/teacher4.jpg'

import okuwcy1 from '../../img/postsimg/okuwcy/stdn1.jpg'
import okuwcy2 from '../../img/postsimg/okuwcy/stdn2.jpg'
import okuwcy3 from '../../img/postsimg/okuwcy/stdn3.jpg'
import okuwcy4 from '../../img/postsimg/okuwcy/stdn4.jpg'

import owrenmek1 from '../../img/postsimg/owrenmek/learn1.jpg'
import owrenmek2 from '../../img/postsimg/owrenmek/learn2.jpg'
import owrenmek3 from '../../img/postsimg/owrenmek/learn3.jpg'

import oyunowren1 from '../../img/postsimg/oyunlarowren/oyun.jpg'
import oyunowren2 from '../../img/postsimg/oyunlarowren/oyun1.jpg'
import oyunowren3 from '../../img/postsimg/oyunlarowren/oyun2.jpg'





const posts = [

    {
        id: 1,
        title: 'Mekdep Germaniýada Döreýär: Ilkinji Blog Posty',
        description: '1900 töweregi, Amerikadaky göçmenlere dil öwretmek zerurlygy döreýär we olaram Germanlardan klas mekdep düşünjäni alyp ýaýratmak bilen işe başlaýar.',
        image: mekdep1,
        detailimage1: mekdep2,
        detailimage2: mekdep3,
        date: 'Awgust 10, 2023',
        tags: ['#mekdep', '#taryh'],
        video: null,
        longDescription: 'Germaniýada bir mekdep esaslandyryldy, 1900-nji ýyllaryň başlarynda Amerikada göçmenlere dil öwretmek zerurlygy ýüze çykdy. Germanlar bu ýagdaýy göz öňünde tutup, klassiki mekdep düşünjesini Amerikada ýaýratmakda öňdeligi elinde saklady.',
        longDescription1: 'Bu mekdep düşünjesi, Amerikanyň dürli künjeklerinde öwrenilmeli, iň gowy mekdepleriň kemala gelmegine sebäp boldy. Öwrenijiler, diňe bir dili däl, eýsem medeniýeti hem öwrenip başladylar. Bu ýagdaý, täze nesliň bilimi we dünýägaraýşy bilen ýakyndan tanyşdyrylan täsirli bir ýol boldy.',
        blockquote: '“Mekdepler diňe bilim merkezleri däl, olar jemgyýetiň kemala gelmegine hem-de medeniýetiň ösmegine goşant goşýan täsirli institutlardyr.”',
        longDescription2: 'Şu günki günde, bu mekdep modeliniň düşünjeleri, dünýäniň dürli künjeklerinde mekdeplerde ulanylýar. Mekdepleriň diňe bilim bermek bilen çäklenmän, ýaşlara durmuş endiklerini hem öwretmekde nähili täsir edýändigi barada pikir alyşmak bilen, geljegiň mekdepleri näderejede täsirli bolar diýip soraglar ýüze çykýar.',
        longDescription3: 'Geljegiň mekdepleri, tehnologiýanyň ösmegi bilen, has integrirlenen we interaktiw görnüşde bolar. Sanly bilim serişdeleri we AI kämilleşmeleri, okuwçylar bilen has ýakyn işleşmäge mümkinçilik berer. Emma, mekdepleriň jemgyýetiň üns merkezinde galmagyny üpjün etmek üçin, olar bilimden has giňişleýin maksatlara hyzmat etmeli bolarlar.'
    },
    {
        id: 2,
        title: 'Ýaşlara Nädip Ögretmeli: Oýunlar we Dersler',
        description: 'Gençlere bilim bermegiň täze we täsirli usullaryny öwreniň. Bu blog ýazgysynda, derslere oýunlar goşmak, çagalaryň näme öwrenmelidigini we ýaşlarda nähili bilim berilmelidigini ara alyp maslahatlaşarys.',
        image: oyunowren1,
        detailimage1: oyunowren2,
        detailimage2: oyunowren3,
        date: 'Awgust 12, 2023',
        tags: ['#bilim', '#gençler'],
        video: null,
        longDescription: 'Bilim beriş usullary wagtyň geçmegi bilen özgerýär. Çagalar we ýaşlar üçin täze metodlary ulanmak, has täsirli bilim bermegiň möhüm bir ýoludyr. Oýunlar we interaktiw çäreler, ýaşlaryň ýokary gatnaşygy we täsirli öwrenişini üpjün edýär.',
        longDescription1: 'Derslerde oýunlar we interaktiw çäreler goşmak, çagalaryň degişli temalary has gowy düşünmegine kömek edýär. Oýunlar, çagalara maglumatlary aktiw ýagdaýda öwretmäge mümkinçilik berýär we bilimleri has täsirli ösdürýär. Şeýle hem, döwrebap okuw metodlaryny ulanmak, ýaşlaryň bilim almak islegini artdyrýar we olaryň döredijilik potensialyny açýar.',
        blockquote: '“Bilim berişde oýunlar we interaktiw metodlar, ýaşlaryň bilimine täze bir ýerden girmäge kömek edýär we olaryň döredijilik we tärniň ýetirilmegine mümkinçilik berýär.”',
        longDescription2: 'Ýaşlarda bilim bermegiň düzgünleri we metodlary, olaryň geljekde üstünlik gazanmagynda möhüm rol oýnaýar. Çagalaryň ýaş döwürlerinde, olar üçin döwrebap we çekiji dersler düzmek, olaryň öwrenme islegini artdyrýar we olaryň akyl taýdan ösüşini ösdürýär. Bu usullar bilen, ýaşlaryň bilim derejesi ýokarlanar we olaryň jemgyýetde üstünlik gazanmagyna kömek eder.',
        longDescription3: 'Gelişigiň mekdepleri, ýaşlarda oýun we interaktiw çäreleri ulanmak bilen, has täsirli bilim bermegiň täze ýoluny hödürleýär. Şeýle hem, çagalaryň ýaş döwürlerinde, olaryň güýçli we güýçli bir bilim almak üçin, has täsirli metodlary ulanmaly bolarys. Şu günki gün, okuw metodlaryny we tehnologiýalary ulanmak, ýaşlaryň biliminiň has ýokary derejesini üpjün edýär.'
    },




    {
        id: 3,
        title: 'Häzirki wagtda AI Ulanmagyň Ähmiýetleri',
        description: 'AI(Artificial intelligence)  häzirki döwürde uly täsir edýär. Bu blog ýazgysynda AI-nyň nähili we nädip ulanylýandygyny, haýsy ugurlarda hünärleşendigini we ýaşlara AI-ny ulanmak boýunça haýsy maslahatlary berjekdigimizi öwreniň.',
        image: ai1,
        detailimage1: ai2,
        detailimage2: ai3,
        date: 'Awgust 15, 2023',
        tags: ['#AI', '#tehnologiýa'],
        video: null,
        longDescription: 'AI (Emeli aň) häzirki döwürde dürli ugurlarda giňden ulanylýar. Oňaň ulanmalary, şol sanda saglygy goraýyş, finans, bilim we başga-da birnäçe ulgamlar üçin ulanylyp bilner. AI, maglumatlary analiz etmek, näzik ýagdaýlary yzarlamak we ýöriteleşdirilen çözgütleri teklip etmek bilen tanalýar.',
        longDescription1: 'AI-nyň hünärleşen ugurlary köp. Ol saglygy goraýyşda diagnoslar we dermanlaryň täsirini öwrenmekde, finans pudagynda maýa goýum kararlar üçin maglumatlary analiz etmekde, şeýle hem bilimde şahsy öwreniş planlaryny döretmekde ulanylýar. Şeýle hem, AI ýazuw, grafik dizaýn, awtomatizasiýa we başga-da birnäçe ugurlarda giňden ulanylýar.',
        blockquote: '“AI, häzirki zaman tehnologiýalarynyň esasy görnüşidir we onuň täsiri dünýäde her bir ulgama ýetik derejede güýçli bolup biler.”',
        longDescription2: 'ýaşlar üçin AI-ny öwrenmek we ulanyp bilmek, olara täsirli we öňdebaryjy mümkinçilikleri berýär. AI bilen tanyşmak, ýaşlaryň täze tehnologiýalar bilen işleşmek we täze çözgütleri göz öňünde tutmak üçin zerurlyklary bardyr. AI ulgamyny öwrenmek we onuň hyzmatlaryny ulanmak, ýaşlaryň ösüşi we bilim derejesiniň ýokarlanmagynda möhüm rol oýnaýar.',
        longDescription3: 'Gelejegiň AI-nyn ýaşlara we ähli jemgyýete berjek täsirleri uly bolar. AI arkaly ýaşlar, täze mümkinçilikler we ykdysady taýdan has ýokary derejesi bilen işleýän çözgütleri işläp biljekdir. AI-nyn ulanylyşy, ýaşlaryň innowasiýa we tehnologiýalar bilen baglanyşygyny güýçlendirer we olaryň täze ýaş döwrüne laýyk mümkinçilikleri gazanmaklaryna kömek eder.'
    }
    ,
    {
        id: 4,
        title: 'Bir Hünäri Öwrenmek Üçin Näme Etmeli?',
        description: 'Bir hünäri öwrenmek, diňe bir iş tapmak üçin däl, eýsem şahsy ösüş we hünär taýdan ösüş üçin möhüm bir ädimdir. Bu blog ýazgysynda hünär öwrenmek üçin näme etmeli we nädip netijeli bolup bilersiňiz, şol sanda täze tehnologiýalary özleşdirmek we özüňiz üçin işlemek barada maglumatlar berilýär.',
        image: owrenmek1,
        detailimage1: owrenmek2,
        detailimage2: owrenmek3,
        date: 'Awgust 20, 2023',
        tags: ['#hünär', '#öwrenmek'],
        video: null,
        longDescription: 'Bir hünäri öwrenmek, özüňize üstünlik getirmek we ösüş üçin möhüm bir ädimdir. Hünär öwrenmek üçin, ilkinji nobatda, meýilnama goýmak we maksatlaryňyzy kesgitlemek zerurdyr. Ilkinji ädim hökmünde, hünäriňiziň esasy prinsiplaryny öwrenmek we işiňiziň esasy funksiyalaryna düşünmek möhümdir.',
        longDescription1: 'Hünär öwrenmek üçin maliýe ýagdaýy has möhüm däl. Asyl, işlemek we şahsy ösüş üçin meýilnama goýmak we özüňiz üçin uly zähmet çekmek zerurdyr. Bu, wezipäňiz bilen baglanyşykly dürli meseleleri çözmekde size kömek eder. Ygtyýarlyk we gözegçilik bilen hünäriňize üns bermek, täze bilimler we tejribeler gazanmak üçin mümkinçilik döreder.',
        blockquote: '“Hünär öwrenmek, diňe bir iş tapmak üçin däl, eýsem, özüňizi tanamak we şahsy taýdan ösüş üçin örän möhümdir.”',
        longDescription2: 'Ösüşiň täze tehnologiýalary we innowasiýalary bilen tanşyp, hünäriňizdäki täzelikleri özleşdirmek we ösen tehnologiyalara eýe bolmak size uly peýdalar getirer. Şeýlelik bilen, işiňize täzeden taýýarlyk görüp, ýokary netijelere ýetmek mümkinçiligini gazanarsyňyz.',
        longDescription3: 'Şeýle-de, hünär öwrenmekde dowamlylygy üpjün etmek we özüňizi her gün täzeden ösdürmek we ösdürmek üçin täze mümkinçilikleri gözlemäge çalyşyň. Ösýän tehnologiýalar bilen baglylykda, hünärleriňizi döwrebap saklamak we has netijeli bolmak üçin özüňize ýol görkeziji bolmagyň möhümdigini unutmaly dälsiňiz.'
    }
    ,
    {
        id: 5,
        title: 'Okuwçy, Öwreniji Nähili Bolmaly?',
        description: 'Bir okuwçy we öwreniji nähili bolmaly? Ygtybarly we netijeli bolmak üçin dürli strategiýalary we çäreleri öwreniň.',
        image: okuwcy1,
        detailimage1: okuwcy2,
        detailimage2: okuwcy3,
        date: 'Awgust 15, 2024',
        tags: ['#öwreniji', '#strategiýa', '#motivasiýa'],
        video: null,
        longDescription: 'Okuwçy we öwreniji hökmünde üstünlik gazanmak üçin birnäçe möhüm ädimleri ýerine ýetirmeli. Ilki bilen, täze tehnologiýalary we täzelikleri yzygiderli öwrenmeli. Bu, işiňizde öňdelikde bolmak üçin zerur bolup biler.',
        longDescription1: 'Öwreniş prosesinde, täze açylan serişdeleri we gurallary synap görmek peýdalydyr. Her gün täze maglumatlary we teknologiyalary öwrenmek, ýaşlaryň häzirki döwrüň öňdebaryjy gatnaşyklaryna ýakyndan täsir edýär. Şol bir wagtda, okuwçy öz üstünde işläp, özüni ösdürmek üçin dürli taslamalary ýerine ýetirmeli.',
        blockquote: '“Işde üstünlik gazanmak üçin, diňe bir bilim däl, eýsem täzelikler we täze mümkinçilikler bilen baglanyşykly bolmak zerurdyr.”',
        longDescription2: 'Taslamalar bilen işlemek, özüňiziň bir zatlara degişli bolup biljekdigiňizi görkezýär. Belli bir möhlet bilen döredilen taslama, size netijeli we häsiýetli bir iş döretmekde kömek eder. Taslama döwründe, wagtyny yzygiderli dolandyrmak we özüňizi häsiýetli netijelere ýetirmek üçin çalyşmak möhümdir.Herhili taslamalary taýýarlap ony köpçülige paýlaşmaly, tejribe gazanmaly',
        longDescription3: 'Siziň ýaşaýyşdan we bilimden has gowy netijeleri gazanmak üçin, sport we beýleki täze täzelikleri synap görmek peýdalydyr. Şeýlelik bilen, özüňizi doly we ähli tarapy bilen ösdürmek üçin dürli çäreleri ýerine ýetirmeli we her bir mümkinçilikden peýdalanmaly.'
    }
    ,
    {
        id: 6,
        title: 'Mugallym, Öwrediji Nähili Bolmaly?',
        description: 'Mugallymlar we öwredijiler nähili bolmaly, nämeleri öwretmeli we häzirki wagtda näme öwretmeli? Bu postda, öwrenmäge degişli prinsipler we nyşanlar bilen mugallym we öwrediji bolmak barada giňişleýin maglumat berilýär.',
        image: mug1,
        detailimage1: mug2,
        detailimage2: mug3,
        date: 'Awgust 14, 2024',
        tags: ['#mugallym', '#öwrediji'],
        video: null,
        longDescription: 'Mugallymlar we öwredijiler öz işlerinde nädip gowy bolmalydyr? Häzirki wagtda, okuwçylara diňe bir maglumat bermegiň däl-de, olaryň öwrenmegi we işiň öwrenilmegi ýaly esasy prinsipleri öwretmek möhümdir. Mugallymlar, okuwçylara özbaşdak pikirlenmegi we täze tehnologiýalara açyk bolmagy öwretmelidirler. Olaryň işlerinde iň ýokary netijä ýetmek üçin, täze tehnologiýalary we metodiki taýdan täzelenmeleri kabul etmek möhümdir.',
        longDescription1: 'Mugallymlar üçin esasy prinsip, okuwçylara diňe bir maglumat bermegem däl-de, olaryň özbaşdak düşünmek we çözgüt tapmak mümkinçiligini bermegi öňe sürýär. Şeýle-de, täze tehnologiýalary we metodlary öwrenmek, täze nesil üçin iň gowy bilim bermegiň ýoludyr. Bu prinsipler bilen mugallymlar, okuwçylara ösüşde kömek edip bilýärler.',
        blockquote: '“Öwrenmegi öwrenmek we öwretmek” ',
        longDescription2: 'Bu prinsip, mugallymlaryň we öwredijileriň okuwçylara hemme zady bermegiň däl-de, olaryň özbaşdak öwrenmek we işlemek mümkinçiligini bermegiň has möhümdir. Öwrenmegi öwretmek, okuwçylara durmuşlarynda öňe gitmekde kömek eder we olaryň geljekde üstünlik gazanmagyna ýardam eder.',
        longDescription3: 'Mugallymlar, öz işlerinde täze düşünjeleri we täzelikleri öwrenmeli we kabul etmeli. Bu, olaryň okuwçylara iň täze bilimleri bermäge mümkinçilik berýär. Şeýle-de, mugallymlar öz şahsy ösüşini dowam etdirip, döwrebap metodlary we tehnologiýalary ulanmak arkaly öz işlerinde üstünlik gazanýarlar.'
    }
    ,

];



const BlogS = () => {
    const BlogCard = ({ post, large }) => {
        const navigate = useNavigate();
        return (
            <div
                className={`bg-gray-800 cursor-pointer rounded-lg overflow-hidden shadow-lg ${large ? 'col-span-2 row-span-2' : ''}`}
                onClick={() => navigate(`/blog/${post.id}`)}
            >
                <div className="relative">
                    {post.video ? (
                        <div className="relative w-full h-48 bg-black">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-fill object-center opacity-50"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 text-white"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M3 22v-20l18 10-18 10z" />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-80 object-fill object-center"
                        />
                    )}
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-white">{post.title}</h2>
                    <p className="text-gray-400">{post.date} | {post.tags.join(' ')}</p>
                    <p className="mt-4 text-gray-300">{post.description}</p>
                    <Link to={`/blog/${post.id}`} className="mt-4 text-blue-600 hover:underline">
                        Read More
                    </Link>
                </div>
            </div>
        );
    };


    return (
        <>
            <div className="bg-gray-900 text-white">
                <Navbar />
                <header className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(https://i.pinimg.com/736x/15/c7/d7/15c7d71b129809ba996ebccc8f975e15.jpg)` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white">Programmirleme we Bilim: Öwrenmegiň we öwretmegiň ýoly</h1>
                            <p className="text-lg text-gray-300 mt-4">Tejribe gazanmak üçin birnäçe maglumatlar</p>
                        </div>
                    </div>
                </header>
                <main className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default BlogS;






















