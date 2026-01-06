// 단순한 마우스 호버 및 등장 효과
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // 버튼 클릭 이벤트
    const joinBtn = document.querySelector('.btn-primary');
    joinBtn.addEventListener('click', () => {
        alert('심사 중... 당신의 뇌파를 분석하고 있습니다. 자세한 사항은 제니에게 문의하십시오.');
    });
});