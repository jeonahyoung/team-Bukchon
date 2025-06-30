/**
 * 환영 모달 기능을 위한 JavaScript
 * 페이지 로드 시 모달을 표시하고 닫기 버튼 클릭 시 모달을 닫는 기능 제공
 */

document.addEventListener('DOMContentLoaded', function() {
    // 모달 요소 가져오기
    const welcomeModal = document.getElementById('welcomeModal');
    const closeModalBtn = document.getElementById('closeModal');
    
    // 페이지 로드 후 약간의 지연 시간을 두고 모달 표시
    setTimeout(function() {
        welcomeModal.classList.add('active');
    }, 500); // 0.5초 후에 모달 표시
    
    // 닫기 버튼 클릭 시 모달 닫기
    closeModalBtn.addEventListener('click', function() {
        welcomeModal.classList.remove('active');
        
        // 모달이 닫힌 후 애니메이션을 위한 시간을 두고 완전히 숨김 처리
        setTimeout(function() {
            welcomeModal.style.display = 'none';
        }, 300); // 0.3초 (트랜지션 시간)
    });
    
    // 모달 외부 클릭 시 모달 닫기 (선택적 기능)
    welcomeModal.addEventListener('click', function(event) {
        // 모달 콘텐츠가 아닌 배경을 클릭했을 때만 닫기
        if (event.target === welcomeModal) {
            welcomeModal.classList.remove('active');
            
            setTimeout(function() {
                welcomeModal.style.display = 'none';
            }, 300);
        }
    });
    
    // 세션 스토리지에 모달 표시 여부 저장 (선택적 기능)
    // 사용자가 모달을 닫으면 같은 세션에서는 다시 표시하지 않음
    if (sessionStorage.getItem('modalShown') !== 'true') {
        welcomeModal.classList.add('active');
        sessionStorage.setItem('modalShown', 'true');
    } else {
        welcomeModal.style.display = 'none';
    }
});
