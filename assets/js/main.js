// 스크롤 이벤트를 감지하여 헤더 스타일을 변경하는 스크립트

document.addEventListener('DOMContentLoaded', function() {
    // 헤더 스크롤 기능
    const header = document.querySelector('.header');
    let lastScrollTop = 0; // 마지막 스크롤 위치 저장 변수
    const scrollThreshold = 5; // 스크롤 감지 임계값 (매우 작게 설정)
    
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // 스크롤 방향 감지 (아래로 스크롤 = 헤더 숨김, 위로 스크롤 = 헤더 표시)
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // 아래로 스크롤 중이고, 임계값 이상 스크롤됨
            header.classList.add('hide'); // 헤더 숨김
        } else if (scrollTop < lastScrollTop) {
            // 위로 스크롤 중
            header.classList.remove('hide'); // 헤더 표시 
        }
        
        // 스크롤 위치에 따라 배경 스타일 변경 (기존 기능 유지)
        if (scrollTop > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            header.classList.remove('hide'); // 페이지 최상단에서는 항상 헤더 표시
        }
        
        // 현재 스크롤 위치 저장
        lastScrollTop = scrollTop;
    });
    
    // 페이지 로드 시 초기 스크롤 위치에 따라 클래스 설정
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    }
    
    // ===== Public Hanok 섹션 버튼 클릭 기능 =====
    const publicHanokButtons = document.querySelectorAll('.public-hanok .btns button');
    const cardTitle = document.querySelector('.card-text h2');
    const cardDescription = document.querySelector('.card-text p');
    const cardItem = document.querySelector('.card-item');
    
    // 한옥 정보 데이터
    const hanokData = {
        'BAEKIN-JAE': {
            title: 'BAEKIN-JAE HOUSE',
            description: 'Traditional Korean house characterized by natural materials,<br>curved tiled roofs with heating system'
        },
        'HOUSE OF INTEGRITY': {
            title: 'HOUSE OF INTEGRITY',
            description: 'A beautiful hanok with a history dating back to the Joseon Dynasty,<br>known for its elegant wooden structure and peaceful garden'
        },
        'HANOK CHUNG': {
            title: 'HANOK CHUNG',
            description: 'Modern interpretation of traditional Korean architecture,<br>combining historical elements with contemporary design'
        },
        'GAERYONG HOUSE': {
            title: 'GAERYONG HOUSE',
            description: 'Famous for its unique courtyard and traditional tea ceremonies,<br>offering visitors an authentic cultural experience'
        }
    };
    
    // 버튼 클릭 이벤트 추가
    publicHanokButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 활성화된 버튼 스타일 변경
            publicHanokButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 클릭한 버튼에 따라 콘텐츠 변경
            const hanokType = this.textContent;
            const data = hanokData[hanokType];
            
            if (data) {
                // 카드 애니메이션 효과
                cardItem.classList.add('fade-out');
                
                // 애니메이션 후 콘텐츠 변경
                setTimeout(() => {
                    cardTitle.textContent = data.title;
                    cardDescription.innerHTML = data.description;
                    
                    // 애니메이션 완료
                    cardItem.classList.remove('fade-out');
                    cardItem.classList.add('fade-in');
                    
                    // 애니메이션 클래스 제거
                    setTimeout(() => {
                        cardItem.classList.remove('fade-in');
                    }, 500);
                }, 300);
            }
        });
    });
    
    // 초기 버튼 활성화 (처음 버튼)
    if (publicHanokButtons.length > 0) {
        publicHanokButtons[0].classList.add('active');
    }
    
    // ===== Visit Bukchon 섹션 교통 탭 클릭 기능 =====
    const transportTabs = document.querySelectorAll('.transport-tabs .tab');
    const transportItems = document.querySelectorAll('.transport-content .transport-item');
    
    // 교통 정보 데이터
    const transportData = {
        'bus': [
            {
                title: 'ANGUK STATION EXIT #5 (ID: 01294)',
                routes: '109, 151, 162, 171, 172, 272, 401, 7025'
            },
            {
                title: 'ANGUK STATION EXIT #5 (ID: 01294)',
                routes: '109, 151, 162, 171, 172, 272, 401, 7025'
            },
            {
                title: 'ANGUK STATION EXIT #5 (ID: 01294)',
                routes: '109, 151, 162, 171, 172, 272, 401, 7025'
            }
        ],
        'subway': [
            {
                title: 'ANGUK STATION LINE 3 (ORANGE)',
                routes: 'Exit 2 - 5 minute walk to Bukchon'
            },
            {
                title: 'JONGNO 3-GA STATION',
                routes: 'Line 1, 3, 5 - 15 minute walk to Bukchon'
            }
        ],
        'car': [
            {
                title: 'PARKING NEAR BUKCHON',
                routes: 'Limited street parking available'
            },
            {
                title: 'ANGUK STATION PARKING LOT',
                routes: 'Public parking - 5,000 KRW per hour'
            },
            {
                title: 'BUKCHON VISITOR CENTER',
                routes: 'Limited parking for visitors - reservation required'
            }
        ]
    };
    
    // 탭 클릭 이벤트 추가
    transportTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 활성화된 탭 스타일 변경
            transportTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 클릭한 탭에 따라 콘텐츠 변경
            const tabType = this.getAttribute('data-tab');
            const transportContent = document.querySelector('.transport-content');
            
            // 애니메이션 효과
            transportContent.classList.add('fade-out');
            
            setTimeout(() => {
                // 기존 항목 제거
                while (transportContent.firstChild) {
                    transportContent.removeChild(transportContent.firstChild);
                }
                
                // 새 항목 추가
                const data = transportData[tabType];
                if (data) {
                    data.forEach(item => {
                        const transportItem = document.createElement('div');
                        transportItem.className = 'transport-item active';
                        transportItem.innerHTML = `
                            <div class="station-info">
                                <h4>${item.title}</h4>
                                <p>${item.routes}</p>
                            </div>
                        `;
                        transportContent.appendChild(transportItem);
                    });
                }
                
                // 애니메이션 완료
                transportContent.classList.remove('fade-out');
                transportContent.classList.add('fade-in');
                
                setTimeout(() => {
                    transportContent.classList.remove('fade-in');
                }, 500);
            }, 300);
        });
    });
});
