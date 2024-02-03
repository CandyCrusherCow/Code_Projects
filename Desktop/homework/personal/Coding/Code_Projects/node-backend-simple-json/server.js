const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']=== 'Aries'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Aries (March 21 - April 19)",
          status: "This month, Aries, you find yourself in a dynamic and energetic phase. Embrace opportunities for personal growth and self-discovery. Your assertiveness and enthusiasm will be key in overcoming challenges. Be open to new perspectives and collaborations, as they may lead to unexpected breakthroughs in both personal and professional spheres.",
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']=== 'Taurus'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Taurus (April 20 - May 20)",
          status: "Taurus, this month encourages you to focus on your well-being. Take time for self-care and prioritize your mental and physical health. Balance work with relaxation, and consider adopting new routines that promote long-term stability. Embracing change will bring positive outcomes, especially in your relationships and career.",
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student']=== 'Gemini'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Gemini (May 21 - June 20)",
            status: "Gemini, communication is key for you this month. Clear and honest conversations will strengthen your relationships, both personal and professional. Be mindful of your words and ensure they convey your true intentions. Embrace your natural curiosity and use it to explore new ideas and opportunities that may arise.",
          }
          res.end(JSON.stringify(objToJson));
        }else if(params['student']=== 'Cancer'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Cancer (June 21 - July 22)",
            status: "Cancer, focus on creating a harmonious and nurturing environment this month. Attend to your emotional well-being and strengthen your connections with loved ones. Professionally, trust your instincts and pursue creative endeavors. This is a time to express your feelings openly and foster deeper connections with those around you.",
          }
          res.end(JSON.stringify(objToJson));
        }else if(params['student']=== 'Leo'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Leo (July 23 - August 22)",
            status: "Leo, this month brings opportunities for career advancement. Your natural leadership qualities will shine, and you may find yourself in a position of authority. Embrace challenges with confidence and stay true to your goals. Balancing work and personal life will be crucial for overall success and happiness.",
          }
          res.end(JSON.stringify(objToJson));
        }else if(params['student']=== 'Virgo'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Virgo (August 23 - September 22)",
            status: "Virgo, focus on expanding your knowledge and exploring new interests this month. Educational pursuits and travel plans are favored. Embrace a positive mindset and be open to learning from different perspectives. Your attention to detail and organizational skills will be instrumental in achieving your goals.",
          }
          res.end(JSON.stringify(objToJson));
        }else if(params['student']=== 'Libra'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Libra (September 23 - October 22)",
            status: "Libra, relationships take center stage this month. Focus on fostering open communication and resolving any lingering conflicts. Your charm and diplomacy will be essential in building stronger connections. Professionally, collaboration and teamwork will lead to success. Find a balance between your personal and professional life for overall well-being.",
          }
          res.end(JSON.stringify(objToJson));
        }else if(params['student']=== 'Scorpio'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Scorpio (October 23 - November 21)",
            status: "Scorpio, this month encourages you to delve into your passions and pursue creative endeavors. Trust your instincts and take calculated risks in both personal and professional realms. Your intensity and determination will drive you towards success. Nurture your emotional well-being by connecting with loved ones and finding outlets for self-expression.",
          }
          res.end(JSON.stringify(objToJson));
        }else if(params['student']=== 'Sagittarius'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Sagittarius (November 22 - December 21",
            status: "Sagittarius, a focus on home and family takes precedence this month. Create a stable and nurturing environment that supports your well-being. Explore opportunities for personal growth and self-discovery. Your optimistic and adventurous spirit will guide you through challenges, both in your personal life and career.",
          }
          res.end(JSON.stringify(objToJson));
        }else if(params['student']=== 'Capricorn'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Capricorn (December 22 - January 19)",
            status: "Capricorn, this month emphasizes communication and networking. Strengthen your connections and engage in meaningful conversations to further your personal and professional goals. Be open to collaboration and new ideas. Your disciplined approach and strategic thinking will lead to positive outcomes in various aspects of your life.",
          }
          res.end(JSON.stringify(objToJson));
        }else if(params['student']=== 'Aquarius'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Aquarius (January 20 - February 18)",
            status: "Aquarius, focus on financial stability and practical matters this month. Evaluate your budget and long-term goals, seeking innovative solutions to enhance your financial well-being. Embrace your unique perspective and think outside the box in both personal and professional endeavors. Your forward-thinking approach will lead to success.",
          }
          res.end(JSON.stringify(objToJson));
        }else if(params['student']=== 'Pisces'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Pisces (February 19 - March 20)",
            status: "Pisces, this month encourages self-reflection and spiritual growth. Take time for introspection and connect with your inner self. Embrace your intuition and creativity to navigate challenges in your personal and professional life. Strengthen your relationships by being open and honest, fostering a deeper emotional connection with those around you.",
          }
          res.end(JSON.stringify(objToJson));
          
      }else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "Please enter with first letter capital",

        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8001);
