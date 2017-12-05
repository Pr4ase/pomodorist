

        //globalne promenljive
                var interval;                               
        var minutes = 0;
        var seconds = 10;                    
                                //timer 1 - standard (25min)
                                var minutesStandard = 0;
        var secondsStandard = 10;
                                //timer 2 - short (3min)
                                var shminutes = 3;
                                var shseconds = 59;                                                          
                                //timer 3 - long (10min)
                                var minutesLg = 59;
                                var secondsLg = 9;                          
        var refresrate = 500; //1000msec
                               
                                var counter = 0;
 
        document.getElementById('countDown').innerHTML = 25 + ':' + '00';                             
        var shortbreak = document.getElementById('shortbreak');
 
 
        function countDown(element1, element2, element3, mode)
        {
            //samo je ovo trebalo staviti na vrh glavne fje
            //pri svakom novom kliku kad atreba da pokrene odbrojavanje uradi reset i ostane jan istom id-ju
            //prvi put pozvane fje - kad asmo pokrenuli ceo proces po prvi put
            clearInterval(interval);
                                               
 
            //ovde se preuzima id fje setinterval koji je kao parametar bitan za clearInterval
            //ovo cutaj kao > izvresi fju programski code izmedju {...}  svakih 1000msec
            interval = setInterval(function ()
                {
                    var el1 = document.getElementById(element1);
                                                                                var el2 = document.getElementById(element2);
                                                                                var el3 = document.getElementById(element3);
                    var btn = document.getElementById("btnStart").value;               
 
                    if (btn != "Start" )
                    {
                        if (seconds == -1)
                        {
                            if (minutes == 0)
                                 {                                                                               
                                              if (mode == 'standard')                                                                               
                                                 {                                                                                                                                                                                                            
                                                                 mode = 'shortbreak';                                                                               
                                                                 //ovde zavrsava standard timer                                                                               
                                                                 el1.innerHTML = ("Bring noodles, your tomato soup is cooked ;)");                                                                               
                                                                 el2.innerHTML = ("Kratka pauza")                                                                               
                                                                 minutes = shminutes;                                                                               
                                                                 seconds = shseconds;                                                                               
                                                                 document.getElementById("btnStart").disabled = true;                                                                               
                                                                 document.getElementById("btnReset").disabled = true;                                                                               
                                                                 //ovde pocinje short timer                                                                               
                                                                 counter++;                                                                               
                                                                 if (counter == 4) mode = 'longbreak';                                                                               
                                                                 countDown(element1,element2,element3, mode);                                                                               
                                                 }                                                                                                                                                                                                                                                                                                                                                                            
                                            /*     if (mode == 'longbreak' && counter > 4)                                                                               
                                                 {                                                                                                                                                                                                                                                                                                                                                            
                                                                 //ovde zavrsava standard timer                                                                               
                                                                 el1.innerHTML = ("");                                                                               
                                                                 el2.innerHTML = ("");                                                                               
                                                                 el3.innerHTML = ("Duga pauza")                                                                               
                                                                 minutes = minutesLg;                                                                               
                                                                 seconds = secondsLg;                                                                               
                                                                 document.getElementById("btnStart").disabled = true;                                                                               
                                                                 document.getElementById("btnReset").disabled = true;                                                                               
                                                                 //ovde pocinje short timer                                                                               
                                                                 countDown(element1,element2,element3, mode);                                                                               
                                                 }    */                                                                                                                                                                                                        
                                                 else                                                                               
                                                 {                                                                               
                                                                 mode = 'standard';                                                                               
                                                                 el1.innerHTML = ("");                                                                               
                                                                 el2.innerHTML = ("")                                                                               
                                                                 minutes = minutesStandard;                                                                               
                                                                 seconds = secondsStandard;                                                                               
                                                                 document.getElementById("btnStart").disabled = false;                                                                               
                                                                 document.getElementById("btnReset").disabled = false;                                                                               
                                                                 //ovde pocinje short timer                                                                               
                                                                 countDown(element1,element2,element3, mode);                                                                                                                                                                                                                                                                                                               
                                                 }                                                                               
                                                 return;                                                                               
                                 }                                                                               
                            else
                            {
                                seconds = 60;
                                minutes--;
                            }
                        }
                       
                           var min = minutes < 10 ? '0' + minutes : minutes;
                           var sec = seconds < 10 ? '0' + seconds : seconds;                                                                                               
                           el1.innerHTML = min + ':' + sec ;
 
            //setovanje teksta mnozina vs jednina
            //         if (minutes > 0)
            //            {
            //                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            //            }
            //            else
            //            {
            //                var minute_text = '';
            //            }
                   
            //uvek ce biti bar jedna sekunda do kraja zato nema else part da je second_text = '' kao kod minuta
            //            var second_text = seconds > 1 ? 'seconds' : 'second';
 
                        //el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining ...';
                        //el.innerHTML = minutes + ':' + s;
 
                        seconds--;
                    }
                }, refresrate);
        }
 
        function ChangeMe()
        {          
            if (document.getElementById("btnStart").value == "Start")
            {
                document.getElementById("btnStart").value = "Pause";
            }
            else
            {
                document.getElementById("btnStart").value = "Start";
            }
        }
        function ChangeMe1()
        {          
            if (document.getElementById("btnStart").value == "Pause")
            {
                document.getElementById("btnStart").value = "Start";
            }
           
        }
 
        function resetTimer(element1,element2, element3)
        {  
            minutes = 24;
            seconds = 59;
            var el1 = document.getElementById(element1);
                                                var el2 = document.getElementById(element2);
                                                var el3 = document.getElementById(element3);
            el1.innerHTML =  25 + ':' + '00';                        
            el2.innerHTML = '';
                                                el3.innerHTML = '';
            return;           
        }

