document.addEventListener('DOMContentLoaded', function () {
    // مهارت‌ها را به صورت پویا اضافه می‌کنیم
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'];
    const skillsList = document.getElementById('skills-list');

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // اضافه کردن قابلیت ویرایش برای نام و اطلاعات تماس
    const name = document.getElementById('name');
    const contact = document.getElementById('contact');

    [name, contact].forEach(element => {
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
document.addEventListener('DOMContentLoaded', () => {
    // اطلاعات شخصی
    document.getElementById('name').textContent = 'علی محمدی';
    document.getElementById('title').textContent = 'توسعه‌دهنده نرم‌افزار ارشد';
    document.getElementById('email').textContent = 'ali.mohammadi@email.com';
    document.getElementById('phone').textContent = '۰۹۱۲۳۴۵۶۷۸۹';
    document.getElementById('location').textContent = 'تهران، ایران';
    document.getElementById('summary-text').textContent = 'توسعه‌دهنده نرم‌افزار با بیش از 5 سال تجربه در طراحی و پیاده‌سازی راه‌حل‌های نرم‌افزاری مقیاس‌پذیر. متخصص در JavaScript، React و Node.js با تمرکز بر بهینه‌سازی عملکرد و تجربه کاربری.';

    // مهارت‌ها
    const skills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'GraphQL', 'Docker', 'AWS', 'Git'];
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('span');
        skillElement.classList.add('skill');
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });

    // زبان‌ها
    const languages = [
        { name: 'فارسی', level: 'زبان مادری' },
        { name: 'انگلیسی', level: 'پیشرفته' },
        { name: 'عربی', level: 'متوسط' }
    ];
    const languagesList = document.getElementById('languages-list');
    languages.forEach(lang => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="language-name">${lang.name}</span> <span class="language-level">${lang.level}</span>`;
        languagesList.appendChild(li);
    });

    // انیمیشن اسکرول نرم
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});