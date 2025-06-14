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
});