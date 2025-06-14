document.addEventListener('DOMContentLoaded', function () {
    // مهارت‌ها را به صورت پویا اضافه می‌کنیم
    const skills = ['برنامه‌نویسی C++', 'جنگو', 'پایتون', 'طراحی وب', 'پایگاه داده SQL', 'شبکه‌های کامپیوتری'];
    
    // حذف این بخش یا اصلاح آن
    // const skillsList = document.getElementById('skills-list');
    // skills.forEach(skill => {
    //     const li = document.createElement('li');
    //     li.textContent = skill;
    //     skillsList.appendChild(li);
    // });

    // اضافه کردن قابلیت ویرایش برای نام و اطلاعات تماس
    const editableElements = ['name', 'title', 'email', 'phone', 'location', 'summary-text'];
    editableElements.forEach(id => {
        const element = document.getElementById(id);
        element.addEventListener('click', function () {
            const text = this.textContent;
            const input = document.createElement('input');
            input.value = text;
            this.textContent = '';
            this.appendChild(input);
            input.focus();

            input.addEventListener('blur', function () {
                element.textContent = this.value;
            });

            input.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    element.textContent = this.value;
                }
            });
        });
    });

    // اطلاعات شخصی
    document.getElementById('name').textContent = 'پوریا ولایی';
    document.getElementById('title').textContent = 'مهندس کامپیوتر ';
    document.getElementById('email').textContent = 'poorya_velaei@yahoo.com';
    document.getElementById('phone').textContent = '۰۹۹۳۵۰۵۲۳۴۱';
    document.getElementById('location').textContent = 'ایران';
    document.getElementById('summary-text').textContent = 'مهندس کامپیوتر جوان و مشتاق با ۲۳ سال سن، تازه فارغ‌التحصیل از دانشگاه شیخ بهایی. آماده برای شروع حرفه در صنعت فناوری اطلاعات و کسب تجربه‌های جدید در زمینه‌های مختلف مهندسی نرم‌افزار و سخت‌افزار.';

    // تحصیلات
    const educationContainer = document.getElementById('education-container');
    const educationItem = document.createElement('div');
    educationItem.classList.add('education-item');
    educationItem.innerHTML = `
        <h3>کارشناسی مهندسی کامپیوتر</h3>
        <p>دانشگاه شیخ بهایی</p>
        <p class="date">۱۴۰۴</p>
    `;
    educationContainer.appendChild(educationItem);

    // مهارت‌ها
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        const fragment = document.createDocumentFragment();
        skills.forEach(skill => {
            const skillElement = document.createElement('span');
            skillElement.classList.add('skill');
            skillElement.textContent = skill;
            fragment.appendChild(skillElement);
        });
        skillsContainer.appendChild(fragment);
    } else {
        console.error('Element with id "skills-container" not found');
    }

    // مهارت‌های نرم
    const softSkills = ['کار تیمی', 'حل مسئله', 'یادگیری سریع', 'ارتباط موثر', 'مدیریت زمان'];
    const softSkillsContainer = document.getElementById('soft-skills-container'); // مشکل 2: ارجاع به soft-skills-container که وجود ندارد
    if (softSkillsContainer) {
        softSkills.forEach(skill => {
            const skillElement = document.createElement('span');
            skillElement.classList.add('skill');
            skillElement.textContent = skill;
            softSkillsContainer.appendChild(skillElement);
        });
    } else {
        console.error('Element with id "soft-skills-container" not found');
    }

    // زبان‌ها
    const languages = [
        { name: 'فارسی', level: 'زبان مادری' },
        { name: 'انگلیسی', level: 'متوسط' }
    ];
    const languagesList = document.getElementById('languages-list');
    if (languagesList) {
        languages.forEach(lang => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="language-name">${lang.name}</span> <span class="language-level">${lang.level}</span>`;
            languagesList.appendChild(li);
        });
    } else {
        console.error('Element with id "languages-list" not found');
    }

    // لینک‌های مرتبط
    const links = [
        { name: 'GitHub', url: 'https://github.com/pouriavelaei' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pouriavelaei' }
    ];
    const linksContainer = document.getElementById('links-container'); // مشکل 3: ارجاع به links-container که وجود ندارد
    if (linksContainer) {
        links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.name;
            linkElement.target = '_blank';
            linkElement.classList.add('social-link');
            linksContainer.appendChild(linkElement);
        });
    } else {
        console.error('Element with id "links-container" not found');
    }

    // انیمیشن اسکرول نرم
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error('Target element not found for smooth scroll');
            }
        });
    });
});

console.log('Script loaded and executed');