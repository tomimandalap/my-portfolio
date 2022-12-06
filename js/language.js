function loadlang() {
  let language = document.getElementById("langselector").value;

  // Home
  let homeTitle = document.getElementById("home-title");
  let btnHomeAbout = document.getElementById("btn-home-about");
  let btnHomeExp = document.getElementById("btn-home-experience");
  let btnHomeSkills = document.getElementById("btn-home-skills");
  let btnHomeWork = document.getElementById("btn-home-work");

  // About ME
  let aboutTitle = document.getElementById("about-title");
  let aboutDescription = document.getElementById("about-description");

  // Experience
  let expTitle = document.getElementById("experience-title");
  let expTitleFirst = document.getElementById("experience-title-first");
  let expDateFirst = document.getElementById("experience-date-first");
  let expDescFirst = document.getElementById("experience-description-first");
  let expTitleSecond = document.getElementById("experience-title-second");
  let expDateSecond = document.getElementById("experience-date-second");
  let expDescSecond = document.getElementById("experience-description-second");

  // skills
  let skillsTitle = document.getElementById("skills-title");
  let skillsDesc = document.getElementById("skills-description");

  // work
  let workTitle = document.getElementById("work-title");
  let workDescFirst = document.getElementById("work-desc-first");
  let workDescSecond = document.getElementById("work-desc-second");

  if (["id"].includes(language)) {
    homeTitle.innerHTML =
      "Halo, Saya <strong class='text-cl-quaternary text-uppercase'>Tomi Mandala Putra</strong>";
    btnHomeAbout.innerHTML = "Siapa saya?";
    btnHomeExp.innerHTML = "Pengalaman Kerja";
    btnHomeSkills.innerHTML = "Keahlian";
    btnHomeWork.innerHTML = "Lihat Portfolio";

    aboutTitle.innerHTML = "Siapa sebenarnya Tomi?";
    aboutDescription.innerHTML = `Tomi seorang
    <strong class='text-cl-quaternary'>frontend web developer</strong> yang
    mempunyai motivasi tinggi. Mampu bekerja dalam sebuah tim maupun
    individu. Mempunyai pengalaman dalam membuat aplikasi website
    menggunakan freamwork/library
    <strong class='text-cl-quaternary'
      >VueJS, NuxtJS, React dan NextJS</strong
    >. Serta menggunakan Bootstrap, Vuetify dan TailwindCSS dalam membuat
    aplikasi EZWallet (Dompet Digital), Poin of Sales (POS) Website Coffee
    Shop dan lain-lain. Tomi juga mempunyai pengetuan dan pemahaman tentang
    <strong class='text-cl-quaternary'>UI/UX</strong>
    seperti user flow, brainstroming, wireframe and UI desain menggunakan
    tools Figma, Whimsical dan memiliki latar pengalaman membuat sistem
    monitoring & kontrol berbasis
    <strong class='text-cl-quaternary'>Arduino (Mikrokontroller)</strong>.`;

    expTitle.innerHTML = "Pengalaman Kerja";
    expTitleFirst.innerHTML = "Frontend Engineer";
    expDateFirst.innerHTML = "Jun 2021 - Saat ini";
    expDescFirst.innerHTML = `"Bekerja sebagai Frontend Engineer devisi Project di Privy"`;

    expTitleSecond.innerHTML = "Magang Teknisi";
    expDateSecond.innerHTML = "Sep 2019 - Feb 2020";
    expDescSecond.innerHTML = `"Mewakili Jurusan Fisika sebagai pemateri tentang Monitoring
    Kualitas Air Bak Pencucian Buah Nanas berbasis Internet of Things
    (IoT) dan magang sebagai teknisi di PT. Great Giant Foods Lampung"`;

    skillsTitle.innerHTML = "Keahlian";
    skillsDesc.innerHTML = `Memiliki pengalaman lebih dari
    <strong class="text-cl-quaternary">1 tahun</strong> dalam
    menggunakan library/freamwork sebagai penunjang dalam pembuatan
    sebuah website.`;

    workTitle.innerHTML = "Portofolio";
    workDescFirst.innerHTML = ` <strong class="text-cl-primary">Kaul kopi</strong>
    dirancang menggunakan
    <strong class="text-cl-quaternary"
      >NuxtJS dan Vuetify</strong
    >. Website ini mempunyai page Dashboard Admin digunakan
    untuk mengatur text dan gambar yang akan disajikan pada
    landing page, serta mempunyai fitur realtime chat
    menggunakan
    <strong class="text-cl-quaternary">Tawk.to dan google analitycs</strong>.`;

    workDescSecond.innerHTML = `<strong class="text-cl-primary">Zulkit Project</strong>
    dirancang menggunakan
    <strong class="text-cl-quaternary">Vue 3</strong> dan
    Pinia sebagai state management, serta mengaplikasikan
    router guard dan validasi form menggunakan Vuelidate.
    Zulkit sendiri dibangun menggunakan
    <strong class="text-cl-quaternary"
      >Tailwind CSS sebagai</strong
    >
    styling website.`;
  } else {
    homeTitle.innerHTML =
      "Hello, I'm <strong class='text-cl-quaternary text-uppercase'>Tomi Mandala Putra</strong>";
    btnHomeAbout.innerHTML = "Who am I?";
    btnHomeExp.innerHTML = "Work Experience";
    btnHomeSkills.innerHTML = "Skills";
    btnHomeWork.innerHTML = "View Portfolio";

    aboutTitle.innerHTML = "Who really is Tomi?";
    aboutDescription.innerHTML = `Tomi is a highly motivated <strong class='text-cl-quaternary'>frontend web developer</strong>. Able to work in team or individual. Have experience in creating website applications using <strong class="text-cl-quaternary">VueJS, NuxtJS, React and NextJS</strong> frameworks/libraries. As well as using Bootstrap, Vuetify and TailwindCSS in creating EZWallet (Digital Wallet) applications, Coffee Shop Website Point of Sales (POS) and others. Tomi also has knowledge and understanding of <strong class="text-cl-quaternary">UI/UX</strong> such as user flows, brainstorming, wireframes and UI design using Figma, Whimsical tools and has background experience in creating Arduino-based monitoring & control systems <strong class="text-cl-quaternary">(microcontrollers)</strong>.`;

    expTitle.innerHTML = "Works Experience";
    expTitleFirst.innerHTML = "Frontend Engineer";
    expDateFirst.innerHTML = "Jun 2021 - Present";
    expDescFirst.innerHTML = `"Worked as a Frontend Engineer in the Projects division at Privy"`;

    expTitleSecond.innerHTML = "Technician Apprentice";
    expDateSecond.innerHTML = "Sep 2019 - Feb 2020";
    expDescSecond.innerHTML = `"Representing the Department of Physics as a speaker on Monitoring
    Water Quality for Pineapple Washing Tubs based on the Internet of Things
    (IoT) and apprenticed as a technician at PT. Great Giant Foods Lampung"`;

    skillsTitle.innerHTML = "Hard Skills";
    skillsDesc.innerHTML = `Have experience of more than <strong class="text-cl-quaternary">1 year</strong> in using a library/framework as a support in making websites.`;

    workTitle.innerHTML = "Portfolio";
    workDescFirst.innerHTML = `<strong class="text-cl-primary">Kaul Kopi</strong> was designed using <strong class="text-cl-quaternary">NuxtJS and Vuetify</strong>. This website has an Admin Dashboard page which is used to set the text and images that will be presented on the landing page, and has a realtime chat feature using <strong class="text-cl-quaternary">Tawk.to and google analytics</strong>.`;
    workDescSecond.innerHTML = `<strong class="text-cl-primary">Zulkit Project</strong> is designed using <strong class="text-cl-quaternary">Vue 3</strong> and Pinia as state management, and implements router guard and form validation using Vuelidate. Zulkit itself was built using <strong class="text-cl-quaternary">Tailwind CSS</strong> as website styling.`;
  }
}
