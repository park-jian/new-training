<template>
  <div class="about">
  <!-- color="blue"는 요일 색깔 highlight색깔등을 나타냄, is-dark는 전체 달력 색깔, is-range? ,is-expanded 는 전체 페이지에 달력하나 나오게
  title-position="left" 는 제목 년월의 위치, :columns="$screens({ default: 1, lg: 2 })" 는 2개 column으로 보여주기 , :masks="masks"
  https://vcalendar.io/attributes.html     -->
  <p>오늘 : {{ todayView }} </p>
  <p>8주후 : {{ eightWeeksLaterView }} </p>
    <vc-calendar
    color="yellow"     
    is-dark
    is-range
    :columns="$screens({ default: 1, lg: 2 })" 
    class="custom-calendar max-w-full"
      
      :attributes="attributes"
      disable-page-swipe
   :disabled-dates='{ weekdays: [4,6]
    }'  
   
    />
  </div>
</template>

<script>
export default {
  data() {
    const today = new Date();    //오늘날짜
    const eightWeeksLater = new Date();   //8주후 날짜
    const year = today.getFullYear();     //오늘 년도
    const month = today.getMonth();   //오늘 월  원래 JS 날짜 구하는것의 달은 +1을 해주는게 맞는데... 달력은 +1을 하면 안되네...
    const date = today.getDate();         //오늘 일
    const addDate = today.getTime() + (56*24*60*60*1000);   // 오늘부터 8주 후 날짜를 시간으로 변경
    eightWeeksLater.setTime(addDate);    //8주후 날짜 = 오늘 날짜 + 56일

    const afterYear = eightWeeksLater.getFullYear();  //8주후 날짜의 년
    const afterMonth = eightWeeksLater.getMonth();  //8주후 날짜의 월의 한달전
    const afterDate = eightWeeksLater.getDate();      //8주후 날짜의 일
   
    
    const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    const day = week[today.getDay()];           //요일
     const afterDay  = week[eightWeeksLater.getDay()];       //8주후 날짜의 요일
    const todayView = `${year}-${month+1}-${date}-${day}`;
    const eightWeeksLaterView = `${afterYear}-${afterMonth+1}-${afterDate}-${afterDay}`;
    return {
      // masks: {
      //   weekdays: 'WWW',
      // },
      
      todayView,
      eightWeeksLaterView,
      attributes: [
        {
          key: 1,
          highlight: 'pink',  //highlight: true 하면 캘린터 color 색깔로 하이라이트가 나오고 이렇게 원하는 색을 지정할 수 있다.
          customData: {
            title: 'Lunch with mom.',
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, date),
        },
        {
          key: 2,
          dot : true,
          customData: {
            title: 'Take Noah to basketball practice',
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          highlight: {
          color: 'purple',
          fillMode: 'outline',
        },
          customData: {
            title: "Noah's basketball game.",
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Take car to the shop',
            class: 'bg-indigo-500 text-white',
          },
          highlight: {
            
            start: { fillMode: 'outline' },
            base: { fillMode: 'light' },
            end: { fillMode: 'outline' },
          },
          dates: { start: new Date(year, month+1, 14), end: new Date(year, month+1, 18) },
        },
        {
          key: 5,
          customData: {
            title: 'Meeting with new client.',
            class: 'bg-teal-500 text-white',
          },
          dot: {
            style: {
              backgroundColor: 'brown',
            }
          },
          dates: [
            new Date(year, month, 7),
            new Date(year, month, 2),
          ],
        },
        {
          key: 6,
          customData: {
            title: "Mia's gymnastics practice.",
            class: 'bg-pink-500 text-white',
          },
          bar: 'green',
          dates: new Date(year, month, 11),
        },
        // {
        //   key: 7,
        //   customData: {
        //     title: 'Cookout with friends.',
        //     class: 'bg-orange-500 text-white',
        //   },
        //   dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        // },
        // {
        //   key: 8,
        //   customData: {
        //     title: "Mia's gymnastics recital.",
        //     class: 'bg-pink-500 text-white',
        //   },
        //   dates: new Date(year, month, 22),
        // },
        // {
        //   key: 9,
        //   customData: {
        //     title: 'Visit great grandma.',
        //     class: 'bg-red-600 text-white',
        //   },
        //   dates: new Date(year, month, 25),
        // },
      ],
    };
  }
}

</script>

<style  scoped>

</style>