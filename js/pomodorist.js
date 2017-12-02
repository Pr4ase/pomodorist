

        //globalne promenljive
        var interval;
        var minutes = 24;
        var seconds = 59;
        var refresrate = 1000; //1000msec

        document.getElementById('countDown').innerHTML = 25 + ':' + '00';


        function countDown(element)
        {
            //samo je ovo trebalo staviti na vrh glavne fje
            //pri svakom novom kliku kad atreba da pokrene odbrojavanje uradi reset i ostane jan istom id-ju 
            //prvi put pozvane fje - kad asmo pokrenuli ceo proces po prvi put
            clearInterval(interval);

            //ovde se preuzima id fje setinterval koji je kao parametar bitan za clearInterval
            //ovo cutaj kao > izvresi fju programski code izmedju {...}  svakih 1000msec
            interval = setInterval(function ()
                {
                    var el = document.getElementById(element);
                    var btn = document.getElementById("btnStart").value;                

                    if (btn != "Start" )
                    {
                        if (seconds == 0)
                        {
                            if (minutes == 0)
                            {
                                el.innerHTML = ("Bring noodles, your tomato soup is cooked ;)");
                                return;
                            }
                            else
                            {
                                seconds = 60;
                                minutes--;
                            }
                        }

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
                        el.innerHTML = minutes + ':' + seconds;

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

        function resetTimer(element)
        {   
            minutes = 24;
            seconds = 59;
            var el = document.getElementById(element);
            el.innerHTML =  25 + ':' + '00';            
            return;            
        }

