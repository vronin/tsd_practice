function setup() {
$(document).ready(function () {
    // Open & close dropdown menus
    $('.dropdown').click(function () {
       $(this).toggleClass('active');
       $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        // Set span in parent to value of current item
        var selected_text = $(this).text()
        $(this).parents('.dropdown').find('span').text(selected_text);
        var values_picked = $('#rank').text() !== 'Select Rank' && $('#practiсe_time').text() !== 'Practice Time';
        $('#start_button').prop('disabled', !values_picked);
    });
    $('#start_button').click(function (e) {
        e.preventDefault();
        $('#welcome').fadeOut(250);
        $('#practice').fadeIn(250);
        start_practice();
    });

    var techniques_full_list = [
        // Bit chagi
        // Plam heel
        // One finger spear
        // Two finger spear
        // Deah kicks (front, jumping, round)
        // Spinning hook
        // Spinnning inside to outside kick
        // Kwon Do
        // One finger
        // Two finger


        // Blocks
        { "name": "Low Block", "korean": "Ha Dan Makh Ki", "hangul": "하단막기", "rank": "10", "time_cap": 30, "type": "Line Drill"},
        { "name": "High Block", "korean": "San Dan Makh Ki", "hangul": "상단막기", "rank": "10", "time_cap": 30, "type": "Line Drill" },
        { "name": "Inside To Outside Block", "korean": "Ahneso Pahkuro Mahk Ki", "hangul": "안에서 밖으로막기", "rank": "9", "time_cap": 30, "type": "Line Drill" },
        { "name": "Outside To Inside Block", "korean": "Pahkeso Ahnuro Mahk Ki", "hangul": "밖에서 안으로막기", "rank": "9", "time_cap": 30, "type": "Line Drill" },
        { "name": "Side Block", "korean": "Yup Mahk Ki", "hangul": "옆 막기", "rank": "9", "time_cap": 30, "type": "Line Drill"},
        { "name": "High Knife Hand Block", "korean": "San Dan Soo Do Mahk Ki", "hangul": "상단수도막기", "rank": "8", "time_cap": 30, "type": "Line Drill"},
        { "name": "Center Knife Hand Block", "korean": "Choong Dan Soo Do Mahk Ki", "hangul": "중단수도막기", "rank": "8", "time_cap": 30, "type": "Line Drill"},
        { "name": "Low Knife Hand Block", "korean": "Ha Dan Soo Do Mahk Ki", "hangul": "하단수도막기", "rank": "8", "time_cap": 30, "type": "Line Drill" },
        { "name": "Reinforced Defence", "korean": "Chun Kul Ssang Soo", "hangul": "전굴 쌍수", "rank": "7", "time_cap": 30, "type": "Line Drill"},
        { "name": "Low Two-Hand X Block", "korean": "Ha Dan Ssang Soo Mahk Ki", "hangul": "하단쌍수막기", "rank": "6", "time_cap": 30, "type": "Line Drill"},
        { "name": "High Two-Hand X Block", "korean": "Sang Dan Ssang Soo Mahk Ki", "hangul": "상단쌍수막기", "rank": "6", "time_cap": 30, "type": "Line Drill" },

        // Strikes
        { "name": "Low Punch", "korean": "Ha Dan Kong Kyuck", "hangul": "하단공격", "rank": "9", "time_cap": 30, "type": "Line Drill" },
        { "name": "Center Punch", "korean": "Choong Dan Kong Kyuck", "hangul": "중단공격", "rank": "10", "time_cap": 30, "type": "Line Drill" },
        { "name": "High Punch", "korean": "San Dan Kong Kyuck", "hangul": "상단공격", "rank": "9", "time_cap": 30, "type": "Line Drill" },            
        { "name": "Side Punch", "korean": "Choong Dan Hang Jin", "hangul": "중단횡진", "rank": "9", "time_cap": 30, "type": "Line Drill" },
        { "name": "Ridge Hand Strike", "korean": "Yuk Soo Do", "hangul": "역수도", "rank": "8", "time_cap": 30, "type": "Line Drill" },
        { "name": "Elbow Strike", "korean": "Pahl Koop Kong Kyuk", "hangul": "팔꿈공격", "rank": "8", "time_cap": 30, "type": "Line Drill" },
        { "name": "Back Fist", "korean": "Kap Kwon", "hangul": "갑 권", "rank": "8", "time_cap": 30, "type": "Line Drill" },            
        { "name": "Spear Hand Strike", "korean": "Kwan Soo Kong Kyuck", "hangul": "관수공격", "rank": "7", "time_cap": 30, "type": "Line Drill" },

        // Kicks
        { "name": "Front Kick", "korean": "Ahp Cha Ki", "hangul": "앞 차기", "rank": "10", "time_cap": 30, "type": "Line Drill" },
        { "name": "Round House Kick", "korean": "Tollyo Cha Ki", "hangul": "돌려 차기", "rank": "10", "time_cap": 30, "type": "Line Drill" },
        { "name": "Side Kick", "korean": "Yup Cha Ki", "hangul": "옆 차기", "rank": "10", "time_cap": 30, "type": "Line Drill" },
        { "name": "Back Kick", "korean": "Dwi Cha Ki", "hangul": "뒤 차기", "rank": "10", "time_cap": 30, "type": "Line Drill" },
        { "name": "Stepping Side Kick", "korean": "Mirro Yup Cha Ki", "hangul": "밀어옆차기", "rank": "9", "time_cap": 30, "type": "Line Drill" },
        { "name": "Axe Kick", "korean": "Cchik Ki", "hangul": "찍기", "rank": "9", "time_cap": 30, "type": "Line Drill" },            
        { "name": "Spinning Back Kick", "korean": "Dwi Tollyo Cha Ki", "hangul": "뒤 돌려 차기", "rank": "8", "time_cap": 30, "type": "Line Drill" },
        { "name": "Inside Outside Kick", "korean": "Ahneso Pahkuro Cha Ki", "hangul": "안에서 밖으로 차기", "rank": "8", "time_cap": 30, "type": "Line Drill" },
        { "name": "Outside Inside Kick", "korean": "Pahkeso Ahnuro Cha Ki", "hangul": "밖에서 안으로 차기", "rank": "8", "time_cap": 30, "type": "Line Drill" },
        { "name": "Hook Kick", "korean": "Yup Hu Ryo Cha Ki", "hangul": "옆 후려 차기", "rank": "7", "time_cap": 30, "type": "Line Drill" },
        { "name": "Wheel Kick", "korean": "Dwi Hu Ryo Cha Ki", "hangul": "뒤 후려 차기", "rank": "7", "time_cap": 30, "type": "Line Drill" },
        { "name": "Jumping Front Kick", "korean": "E Dan Ahp Cha Ki", "hangul": "이단 앞 차기", "rank": "6", "time_cap": 30, "type": "Line Drill" },
        { "name": "Jumping Round House Kick", "korean": "E Dan Tollyo Cha Ki", "hangul": "이단 돌려 차기", "rank": "6", "time_cap": 30, "type": "Line Drill" },
        { "name": "Jumping Side Kick", "korean": "E Dan Yup Cha Ki", "hangul": "이단 옆 차기", "rank": "6", "time_cap": 30, "type": "Line Drill" },
        { "name": "Flying kick", "korean": "", "hangul": "", "rank": "3", "time_cap": 30, "type": "Line Drill" },

        // Combination
        { "name": "Yuk Soo", "korean": "Yuk Soo", "hangul": "양수", "rank": "5", "time_cap": 30, "type": "Line Drill" },
        { "name": "Yuk Jin", "korean": "Yuk Jin", "hangul": "역진", "rank": "5", "time_cap": 30, "type": "Line Drill" },

        // One-step (Hand)
        { "name": "One Step Hands #1-2", "korean": "Il Soo Sik Dae Ryun Soo Ki #1-2", "hangul": "일 수식 대련 수기 하나, 둘", "rank": "10", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Hands #3-4", "korean": "Il Soo Sik Dae Ryun Soo Ki #3-4", "hangul": "일 수식 대련 수기 셋, 넷", "rank": "9", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Hands #5-6", "korean": "Il Soo Sik Dae Ryun Soo Ki #5-6", "hangul": "일 수식 대련 수기 다섯, 여섯", "rank": "8", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Hands #7-8", "korean": "Il Soo Sik Dae Ryun Soo Ki #7-9", "hangul": "일 수식 대련 수기 일곱, 여덟", "rank": "7", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Hands #9-10", "korean": "Il Soo Sik Dae Ryun Soo Ki #9-10", "hangul": "일 수식 대련 수기 아홉, 열", "rank": "6", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Hands #11-12", "korean": "Il Soo Sik Dae Ryun Soo Ki #11-12", "hangul": "일 수식 대련 수기 열하나, 열둘", "rank": "5", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Hands #13-14", "korean": "Il Soo Sik Dae Ryun Soo Ki #13-14", "hangul": "일 수식 대련 수기 열셋, 열넷", "rank": "4", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Hands #15-16", "korean": "Il Soo Sik Dae Ryun Soo Ki #15-16", "hangul": "일 수식 대련 수기 열다섯, 열여섯", "rank": "3", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Hands #17-18", "korean": "Il Soo Sik Dae Ryun Soo Ki #17-18", "hangul": "일 수식 대련 수기 열일곱, 열여덟", "rank": "2", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Hands #19-20", "korean": "Il Soo Sik Dae Ryun Soo Ki #19-20", "hangul": "일 수식 대련 수기 열아홉, 스물", "rank": "1", "time_cap": 30, "type": "One Step" },

        // One-step (Kicks)
        { "name": "One Step Kicks #1-2", "korean": "Il Soo Sik Dae Ryun Jok Ki #1-2", "hangul": "일 수식 대련 족기 하나, 둘", "rank": "10", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Kicks #3-4", "korean": "Il Soo Sik Dae Ryun Jok Ki #3-4", "hangul": "일 수식 대련 족기 셋, 넷", "rank": "9", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Kicks #5-6", "korean": "Il Soo Sik Dae Ryun Jok Ki #5-6", "hangul": "일 수식 대련 족기 다섯, 여섯", "rank": "8", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Kicks #7-8", "korean": "Il Soo Sik Dae Ryun Jok Ki #7-8", "hangul": "일 수식 대련 족기 일곱, 여덟",  "rank": "7", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Kicks #9-10", "korean": "Il Soo Sik Dae Ryun Jok Ki #9-10", "hangul": "일 수식 대련 족기 아홉, 열", "rank": "6", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Kicks #11-12", "korean": "Il Soo Sik Dae Ryun Jok Ki #11-12", "hangul": "일 수식 대련 족기 열하나, 열둘",  "rank": "5", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Kicks #13-14", "korean": "Il Soo Sik Dae Ryun Jok Ki #13-14", "hangul": "일 수식 대련 족기 열셋, 열넷", "rank": "4", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Kicks #15-16", "korean": "Il Soo Sik Dae Ryun Jok Ki #15-16", "hangul": "일 수식 대련 족기 열다섯, 열여섯", "rank": "3", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Kicks #17-18", "korean": "Il Soo Sik Dae Ryun Jok Ki #17-18", "hangul": "일 수식 대련 족기 열일곱, 열여덟", "rank": "2", "time_cap": 30, "type": "One Step" },
        { "name": "One Step Kicks #19-20", "korean": "Il Soo Sik Dae Ryun Jok Ki #19-20", "hangul": "일 수식 대련 족기 열아홉, 스물", "rank": "1", "time_cap": 30, "type": "One Step" },

        // Self Defence
        { "name": "Self Defence #1-2", "korean": "Ho Sin Sul #1-#2", "hangul": "호신술 하나, 둘", "rank": "10", "time_cap": 30, "type": "Self Defence" },
        { "name": "Self Defence #3-4", "korean": "Ho Sin Sul #3-#4", "hangul": "호신술 셋, 넷", "rank": "9", "time_cap": 30, "type": "Self Defence" },
        { "name": "Self Defence #5-6", "korean": "Ho Sin Sul #5-#6", "hangul": "호신술 다섯, 여섯", "rank": "8", "time_cap": 30, "type": "Self Defence" },
        { "name": "Self Defence #7-8", "korean": "Ho Sin Sul #7-#8", "hangul": "호신술 일곱, 여덟", "rank": "7", "time_cap": 30, "type": "Self Defence" },
        { "name": "Self Defence #9-10", "korean": "Ho Sin Sul #9-#10", "hangul": "호신술 아홉, 열", "rank": "6", "time_cap": 30, "type": "Self Defence" },
        { "name": "Self Defence #11-12", "korean": "Ho Sin Sul #11-#12", "hangul": "호신술 열하나, 열둘", "rank": "5", "time_cap": 30, "type": "Self Defence" },
        { "name": "Self Defence #13-14", "korean": "Ho Sin Sul #13-#14", "hangul": "호신술 열셋, 열넷", "rank": "4", "time_cap": 30, "type": "Self Defence" },
        { "name": "Self Defence #15-16", "korean": "Ho Sin Sul #15-#16", "hangul": "호신술 열다섯, 열여섯", "rank": "3", "time_cap": 30, "type": "Self Defence" },
        { "name": "Self Defence #17-18", "korean": "Ho Sin Sul #17-#18", "hangul": "호신술 열일곱, 열여덟", "rank": "2", "time_cap": 30, "type": "Self Defence" },
        { "name": "Self Defence #19-20", "korean": "Ho Sin Sul #19-#20", "hangul": "호신술 열아홉, 스물", "rank": "1", "time_cap": 30, "type": "Self Defence" },

        // Form
        { "name": "", "korean": "Sae Kye Hyung Il Bu", "hangul": "세계형 일 로", "rank": "10", "time_cap": 55, "type": "Form / Hyung" },
        { "name": "", "korean": "Sae Kye Hyung E Bu", "hangul": "세계형 이 로", "rank": "9", "time_cap": 55, "type": "Form / Hyung" },
        { "name": "", "korean": "Sae Kye Hyung Sam Bu", "hangul": "세계형 삼 로", "rank": "8", "time_cap": 55, "type": "Form / Hyung" },
        { "name": "", "korean": "Pyung Ahn Cho Dan", "hangul": "평안 초단", "rank": "7", "time_cap": 75, "type": "Form / Hyung" },            
        { "name": "", "korean": "Pyung Ahn E Dan", "hangul": "평안 이단", "rank": "6", "time_cap": 75, "type": "Form / Hyung" },
        { "name": "", "korean": "Pyung Ahn Sam Dan", "hangul": "평안 삼단", "rank": "5", "time_cap": 75, "type": "Form / Hyung" }, 
        { "name": "", "korean": "Pyung Ahn Sah Dan", "hangul": "평안 사단", "rank": "4", "time_cap": 75, "type": "Form / Hyung" },
        { "name": "", "korean": "Pyung Ahn Oh Dan", "hangul": "평안 오단", "rank": "3", "time_cap": 75, "type": "Form / Hyung" }, 
        { "name": "", "korean": "Bassai", "hangul": "바싸이", "rank": "2", "time_cap": 85, "type": "Form / Hyung"},
        { "name": "", "korean": "Bong Hyung Il Bu", "hangul": "봉형 일 로", "rank": "2", "time_cap": 75, "type": "Form / Hyung" }, 
        { "name": "", "korean": "Hainhanchi Cho Dan", "hangul": "나이한찌 초단", "rank": "1", "time_cap": 75, "type": "Form / Hyung" },
        { "name": "", "korean": "Bong Hyung E Bu", "hangul": "봉형 이 로", "rank": "1", "time_cap": 85, "type": "Form / Hyung" }, 
        { "name": "", "korean": "Sip Soo", "hangul": "십수", "rank": "0", "time_cap": 75, "type": "Form / Hyung"}, 
    ]

    var breathers = [
        // Rest
        { "name": "Rest", "korean": "Shio", "rank": "10", "time_cap": 15, "type": "", weight: 8},
        { "name": "Rest", "korean": "Shio", "rank": "10", "time_cap": 20, "type": "", weight: 6},
        { "name": "Rest", "korean": "Shio", "rank": "10", "time_cap": 25, "type": "", weight: 6},
        { "name": "Rest", "korean": "Shio", "rank": "10", "time_cap": 30, "type": "", weight: 6},

        // Trivia
        
        { "name": "The Sylla Dynasty was founded in 57 BC.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "The Koguryo was founded in 37 BC.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "The Paekche was founded in 18 BC.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "Sylla Dynasty united 3 kingdoms in 668 AD.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "Five codes of Tang Soo Do were origniated by Won Kwang.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "Wang Kon came to power in 918 AD and formed Koryo Dynasty in 935 AD.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "Muye Dobo Tongji book was published in 1790.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},            
        { "name": "Moo Duk Kwan was founded by Hwang Kee in 1947.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},                        
        { "name": "GM J.C. Shin moved to United State in 1968.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},                                    
        { "name": "WTSDA was founded November 13-14, 1982.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "WTSDA founder is grandmaster Jael Chu Shin.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "Sae Kye Hyung forms were created in 1987.", "korean": "",  "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "Sae Kye Hyung forms are based on Ki Cho forms.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
        { "name": "WTSDA current grandmaster is Mr. William Strong.", "korean": "", "time_cap": 15, "type": "Trivia", weight: 1},
    ]

    var techniques_filtered_list = []
    var breather_interval = 150;

    practice_time_tag = $('#practice_time');
    technique_type_tag = $('#technique_type');        
    technique_name_tag = $('#technique_name');
    technique_name_korean_tag = $('#technique_name_korean');
    technique_timer_tag = $('#technique_timer');
    main_timer_minutes_tag = $('#main_timer_minutes');
    main_timer_seconds_tag = $('#main_timer_seconds');
    rank_tag = $('#rank');
    ticker_length = 1000;

    document.addEventListener('keyup', event => {
        if (event.key === 'Z') {
            ticker_length = Math.floor(ticker_length / 10);
        }
    });

    function weighted_choice(list) {
        let total_weight = 0
        for (let i = 0; i < list.length; i++) {
            total_weight += list[i].weight;
        }

        var weight_based_choice = Math.floor(Math.random() * total_weight);
        for (let i = 0; i < list.length; i++) {
            weight_based_choice -= list[i].weight;
            if (weight_based_choice < 0) {
                return i;
            }
        }
    }
    
    // Updates exercise and practice timer
    function update_timers_text(practice_time_left, technique_time_left) {
        $(technique_timer_tag).text(technique_time_left);
        $(main_timer_minutes_tag).text(Math.floor(practice_time_left / 60))
        $(main_timer_seconds_tag).text(Math.floor(practice_time_left % 60))
    }

    function sayit_english(text, onend) {
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'en-US';
        utter.text = text;
        utter.volume = 1;
        utter.rate = 0.7;
        utter.onend = onend;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);

        // some techniques doesn't have english name
        // And it won't call onend (to say korean) in such a case

        if (text.length == 0) {
            onend();
        }            
    }

    function sayit_korean(text) {
        let utter_kor = new SpeechSynthesisUtterance();
        utter_kor.lang = 'ko-KR';
        utter_kor.text = text; 
        utter_kor.volume = 1;
        utter_kor.rate = 0.7;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter_kor);
    }

    // Chooses a new technique
    function update_technique(rank) {
        var random_technique_index = Math.floor(Math.random() * techniques_filtered_list.length)
        var random_technique = techniques_filtered_list[random_technique_index];

        $(technique_name_tag).text(random_technique.name);
        $(technique_name_korean_tag).text(random_technique.korean);
        $(technique_type_tag).text(random_technique.type);

        let time_cap = random_technique.time_cap;

        // Pronounce it in English and Korean
        sayit_english(random_technique.name, function(event) {
            sayit_korean(random_technique.hangul)
        });

        // Remove selected from the list
        techniques_filtered_list.splice(random_technique_index, 1);
        // If we executed all exercises reset the list
        if (techniques_filtered_list.length == 0) {
            reset_technique_list(rank);
        };

        return time_cap;
    }

    function next_breather() {
        var random_breather = weighted_choice(breathers);
        
        $(technique_name_tag).text(breathers[random_breather].name);
        $(technique_name_korean_tag).text(breathers[random_breather].korean);
        $(technique_type_tag).text(breathers[random_breather].type);
        
        sayit_english(breathers[random_breather].name, function(event) {                
        });


        return breathers[random_breather].time_cap;
    }

    function reset_technique_list(rank) {
        techniques_filtered_list = techniques_full_list.filter(
            technique => parseInt(technique.rank) >= rank
        );
    }

    function start_practice() {
        // Overal practice
        // TBD: Clean
        var time_till_next_breather = breather_interval;
        var practice_time_left = parseInt(practice_time_tag.text().replace('Minutes', '').trim()) * 60;            
        var rank_text = rank_tag.text().replace(/[^0-9]/g,'');
        var rank = parseInt(rank_text); 
        // ChoDanBo can't be parsed
        if (isNaN(rank)) { rank = 0; }
        
        // Technique
       reset_technique_list(rank)
        var technique_time_left = update_technique(rank);
        update_timers_text(practice_time_left, technique_time_left);
        
        var secInterval = setInterval(function () {
            technique_time_left = technique_time_left - 1;
            if (practice_time_left > 0) {
                practice_time_left = practice_time_left - 1;
            }
            time_till_next_breather = time_till_next_breather - 1;

            update_timers_text(practice_time_left, technique_time_left);

            // End of exercise is approaching
            if (technique_time_left == 7 || technique_time_left == 4) {
                let sound = new Audio('./assets/sound/metal-transition.mp3');
                sound.play();
            }

            // End of practice
            if (practice_time_left == 0 && technique_time_left == 0) {
                clearInterval(secInterval);
                $('#practice').fadeOut(250);
                $('#thankyou').fadeIn(250);                    
            }

            // End of exercise
            if (technique_time_left == 0) {
                if (time_till_next_breather > 0) {
                    // Next exercise
                    technique_time_left = update_technique(rank);
                } else {                        
                    time_till_next_breather = breather_interval;
                    technique_time_left = next_breather();
                }
                update_timers_text(practice_time_left, technique_time_left);
            }
            
        }, ticker_length);
    }
})
}