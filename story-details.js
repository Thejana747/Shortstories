document.addEventListener('DOMContentLoaded', () => {
    const stories = [
        {
            id: 1,
            title: 'From Nerd to Hero',
            date: 'July 02, 2024',
            tags: ['Fiction','Inspirational','Motivational'],
            image: 'images/nerdtohero.jpg',
            author: 'Peter2001',
            bio: "Hi There!, I'm Peter and I'm majoring in literature and as a hobby I keep writing stories, most of my stories are influenced by my personal experiences",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    "Chapter": 1,
                    "Title": "Beginnings",
                    "Content": "I grew up in the modest outskirts of our bustling town, where dreams often felt like distant stars—beautiful, but unreachable. My parents, Arvind and Lata, worked tirelessly to provide for our family. My father labored in the local factory while my mother ran a small vegetable stall in the market. Their sacrifices instilled in me a sense of duty and resilience. From an early age, I knew I had to work hard to make something of myself.\n\nLife was simple but challenging. I attended the local school, a small building with peeling paint and broken desks. Education was a luxury, and many of my peers dropped out to support their families. But I was determined to make the most of it. I devoured every book I could find, often staying up late into the night under the dim light of a kerosene lamp. My parents encouraged my efforts, their eyes shining with hope whenever I shared my ambitions.\n\nOne fateful day, the annual town festival arrived—a rare occasion that brought together people from all walks of life. The streets were alive with vibrant colors, the air filled with the sounds of laughter and music. It was amidst this festive chaos that I first saw her. Maya.\n\nMaya was from the affluent part of town, her family known for their wealth and influence. She moved through the crowd with an effortless grace, her laughter like a melody that drew me in. I watched her from a distance, feeling a strange pull. She was everything I wasn’t—elegant, confident, and seemingly out of reach. But fate, it seemed, had other plans.\n\nWe met by chance, both reaching for the same book at a stall selling old novels. Our hands touched, and I looked up to see her smiling at me. Her eyes were warm, and her smile was genuine.\n\n\"Sorry about that,\" she said, her voice soft but clear. \"You can have it.\"\n\n\"No, please, you take it,\" I replied, trying to hide my nervousness. \"I can find another.\"\n\nBut she insisted, and we ended up talking for hours, losing track of time as the festival buzzed around us. We spoke about books, our dreams, and our lives. Despite our different backgrounds, we found common ground in our passions and aspirations. It was a meeting of souls, and for the first time, I felt that perhaps, just perhaps, dreams were not so unreachable after all.\n\nAs the festival came to an end, we exchanged numbers. I walked home that night with a spring in my step, the memory of her smile etched in my mind. Our relationship began to blossom in secret, each meeting a stolen moment of joy. Maya introduced me to books and ideas I had never encountered before, broadening my horizons. In turn, I showed her the simple joys of my world—an honest day's work, the beauty of nature, and the strength found in overcoming adversity.\n\nWe knew the disparity between our worlds loomed over us. Her parents, Mr. and Mrs. Sharma, had grand plans for Maya, plans that did not include a poor boy from the outskirts. But we were young and in love, believing that our love could conquer any obstacle. Little did we know, the biggest challenge was yet to come."
                  },
                  {
                    "Chapter": 2,
                    "Title": "The Spark",
                    "Content": "Our relationship continued to flourish, hidden from the prying eyes of society. We met whenever we could, often at the town library or by the old banyan tree near the river. Each stolen moment was a treasure, each conversation a deeper dive into the connection we shared. The more I learned about Maya, the more I admired her. She was kind, intelligent, and passionate about making a difference in the world.\n\nMaya's dreams were grand. She wanted to travel, to see the world beyond our small town, and to use her education to help those less fortunate. Her eyes sparkled with excitement whenever she spoke of her plans. I found myself inspired by her vision, and I began to dream of a future where we could achieve our goals together.\n\nHowever, the disparity between our worlds became increasingly apparent. Maya lived in a sprawling mansion, surrounded by luxury and comfort, while I struggled to make ends meet. I worked multiple jobs, saving every penny I could to support my family and invest in my future. It was a stark contrast, but Maya never made me feel inferior. Instead, she encouraged me, believing in my potential even when I doubted myself.\n\nOne day, as we sat by the river, Maya turned to me with a serious expression. \"Arjun, we need to talk,\" she said, her voice tinged with worry.\n\nI felt a knot form in my stomach. \"What is it, Maya?\"\n\n\"My parents have been talking about my future,\" she explained. \"They want me to marry Rohan, the son of a wealthy businessman. They think he's the perfect match for me.\"\n\nThe world seemed to tilt, and I struggled to process her words. \"But...what about us?\"\n\n\"I love you, Arjun,\" she said, her eyes filling with tears. \"But they don't know about us. They wouldn't understand. They believe Rohan can provide me with the life they want for me.\"\n\nMy heart ached at the thought of losing her. \"Maya, I promise you, I will work hard. I will prove myself. We can build a life together.\"\n\nShe reached out, taking my hand in hers. \"I believe in you, Arjun. But we need to be realistic. My parents are very influential, and they won't approve of us. We need to find a way to convince them, to show them that our love is real.\"\n\nOur conversation left me with a sense of urgency. I knew I had to act, to prove myself worthy of Maya. From that day on, I worked even harder, taking on extra shifts and saving every rupee I could. I knew it wouldn't be easy, but I was determined to change my circumstances.\n\nDespite the looming threat of her arranged marriage, our love continued to grow. We cherished every moment together, knowing that our time was limited. The thought of Maya being forced to marry someone else was unbearable, and I resolved to fight for our love, no matter the odds.\n\nOur secret meetings became more frequent, and we confided in each other about our fears and hopes. Maya was my anchor, and I was hers. Together, we believed we could overcome any obstacle. Little did we know, the biggest challenge was yet to come."
                  }
                // Add more chapters
            ]
        },
        {
            id: 2,
            title: 'Against All Odds',
            date: 'June 02, 2024',
            tags: ['Crime'],
            image: 'againstallodds.jpg',
            author: 'R.Tripathi',
            bio: 'I am R. Tripathi, a storyteller born and raised in the colorful tapestry of India. Writing has been my passion and companion since as far back as I can remember. From my early days scribbling tales in tattered notebooks to now, where words flow effortlessly from pen to page, storytelling has always been my calling.',
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 3,
            title: 'Love Amidst the Ruins',
            date: 'July 02, 2024',
            tags: ['Romance','Drama','War','Fiction'],
            image: 'image1.png',
            author: 'Nigel',
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapter: 1,
                    title: 'The Harsh Reality',
                    content: [
                        "<p>I remember the cold biting wind that cut through my uniform like a knife...</p>",
                        "<p>The next morning, the sun rose over the frozen battlefield...</p>"
                    ]
                },
                // Add more chapters
            ]
        },
        {
            id: 4,
            title: 'Running Through Shadows',
            date: 'June 20, 2024',
            tags: ['Injustice','Fiction','Resilience'],
            image: 'image1.png',
            author: 'Nigel',
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapter: 1,
                    title: 'The Harsh Reality',
                    content: [
                        "<p>I remember the cold biting wind that cut through my uniform like a knife...</p>",
                        "<p>The next morning, the sun rose over the frozen battlefield...</p>"
                    ]
                },
                // Add more chapters
            ]
        },
        {
            id: 5,
            title: 'Bawang Merah Bawang Putih',
            date: 'June 12, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','Indonesia'],
            image: 'BMBP.jpg',
            author: 'Yeni',
            bio: "Hello, I'm Yeni, and I love writing stories inspired by Indonesian folktales. I enjoy sharing these tales, rich with cultural heritage and valuable life lessons, on various websites. My stories often feature themes of kindness, family, and the magic of traditional folklore, bringing the vibrant spirit of Indonesia to readers around the world.",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 6,
            title: 'The Story of Malin Kundang',
            date: 'June 04, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','Indonesia'],
            image: 'BMBP.jpg',
            author: 'Yeni',
            bio: "Hello, I'm Yeni, and I love writing stories inspired by Indonesian folktales. I enjoy sharing these tales, rich with cultural heritage and valuable life lessons, on various websites. My stories often feature themes of kindness, family, and the magic of traditional folklore, bringing the vibrant spirit of Indonesia to readers around the world.",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 7,
            title: 'From Homeless to CEO',
            date: 'June 24, 2024',
            tags: ['Fantasy','Fiction','Inspirational'],
            image: 'images/FHTC.jpg',
            author: 'Emily2002',
            bio: '',
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 8,
            title: "How Andare Ate the King's Sugar",
            date: 'June 17, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','Sri Lanka'],
            image: 'images/andaresugar.jpg',
            author: 'Chaan99',
            bio: "Hi!, I'm Chaan and as a hobby during my free time I keep writing stories for online sites",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 9,
            title: 'Andare Tricks the Queen and His Wife',
            date: 'June 24, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','Sri Lanka'],
            image: 'images/andaresugar.jpg',
            author: 'Chaan99',
            bio: "Hi!, I'm Chaan and as a hobby during my free time I keep writing stories for online sites",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 10,
            title: 'The Brave Princess Viharamahadevi',
            date: 'June 24, 2024',
            tags: ['Heroine','Family',"Children's",'Non-Fiction','Sri Lanka'],
            image: 'images/viharamahadevi.jpg',
            author: 'Chaan99',
            bio: "Hi!, I'm Chaan and as a hobby during my free time I keep writing stories for online sites",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 11,
            title: "Velusumana's Heroic Journey to Anuradhapura",
            date: 'June 27, 2024',
            tags: ['Heroine','Family',"Children's",'Non-Fiction','Sri Lanka'],
            image: 'images/velusumana.jpg',
            author: 'Chaan99',
            bio: "Hi!, I'm Chaan and as a hobby during my free time I keep writing stories for online sites",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 12,
            title: "Chang'e and Houyi the Archer",
            date: 'July 01, 2024',
            tags: ['Heroine','Family',"Children's",'China'],
            image: 'images/ChangeandHouyi.jpg',
            author: 'Andrew',
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 13,
            title: "Truth Unveiled",
            date: 'July 03, 2024',
            tags: ['Detective','Crime',"Fiction",'mystery'],
            image: 'images/alexmorgan1.jpg',
            author: 'Ronnie C',
            bio: "As a rookie writer captivated by the intricacies of detective stories, I draw inspiration from the masterful storytelling of Agatha Christie and Sir Arthur Conan Doyle.",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 14,
            title: 'Shadows of Oakridge',
            date: 'July 02, 2024',
            tags: ['Detective','Crime',"Fiction",'mystery'],
            image: 'images/shadowsoo.jpg',
            author: 'William87',
            bio: "",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 15,
            title: 'A Lac of Rupees for a Bit of Advice',
            date: 'June 14, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','India'],
            image: 'images/indianfolkstory1.jpg',
            author: 'Raj',
            bio: "Hi There!, I'm Raj",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 16,
            title: 'A Lesson for Kings',
            date: 'June 14, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','India'],
            image: 'images/indianfolkstory1.jpg',
            author: 'Raj',
            bio: "Hi There!, I'm Raj",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 17,
            title: 'The story of how the clever Mahesh Das became Birbal',
            date: 'June 15, 2024',
            tags: ['Folktale','Family',"Children's",'History','India'],
            image: 'images/indianfolkstory3.jpg',
            author: 'Raj',
            bio: "Hi There!, I'm Raj",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 18,
            title: 'The Story of Akbar’s Lost Ring',
            date: 'June 17, 2024',
            tags: ['Folktale','Family',"Children's",'History','India'],
            image: 'images/indianfolkstory4.jpg',
            author: 'Raj',
            bio: "Hi There!, I'm Raj",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 19,
            title: 'The Story of the Mango Tree Dispute',
            date: 'June 19, 2024',
            tags: ['Folktale','Family',"Children's",'History','India'],
            image: 'images/indianfolkstory5.jpg',
            author: 'Raj',
            bio: "Hi There!, I'm Raj",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 20,
            title: 'The Story of the Merchant and the Stolen Goods',
            date: 'June 21, 2024',
            tags: ['Folktale','Family',"Children's",'History','India'],
            image: 'images/indianfolkstory6.jpg',
            author: 'Raj',
            bio: "Hi There!, I'm Raj",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 21,
            title: 'Timun Mas (The Golden Cucumber)',
            date: 'July 05, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','Indonesia'],
            image: 'images/timunmas.jpg',
            author: 'Yeni',
            bio: "Hello, I'm Yeni, and I love writing stories inspired by Indonesian folktales. I enjoy sharing these tales, rich with cultural heritage and valuable life lessons, on various websites. My stories often feature themes of kindness, family, and the magic of traditional folklore, bringing the vibrant spirit of Indonesia to readers around the world.",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 22,
            title: 'Keong Emas (The Story of the Golden Snail)',
            date: 'July 07, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','Indonesia','Fantasy'],
            image: 'images/keongemas.jpg',
            author: 'Yeni',
            bio: "Hello, I'm Yeni, and I love writing stories inspired by Indonesian folktales. I enjoy sharing these tales, rich with cultural heritage and valuable life lessons, on various websites. My stories often feature themes of kindness, family, and the magic of traditional folklore, bringing the vibrant spirit of Indonesia to readers around the world.",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 23,
            title: 'The Story of Jaka Tarub and the Angel',
            date: 'July 07, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','Indonesia','Fantasy'],
            image: 'images/jakatarub.jpg',
            author: 'Yeni',
            bio: "Hello, I'm Yeni, and I love writing stories inspired by Indonesian folktales. I enjoy sharing these tales, rich with cultural heritage and valuable life lessons, on various websites. My stories often feature themes of kindness, family, and the magic of traditional folklore, bringing the vibrant spirit of Indonesia to readers around the world.",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 24,
            title: 'Ugly Duckling No More',
            date: 'July 8, 2024',
            tags: ['Drama','Adolescent',"Novel",'Romance','Fantasy'],
            image: 'images/uglyduckling.jpg',
            author: 'Mary',
            bio: "Hello, I'm Mary",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 25,
  title: 'Lehman Brothers: The Rise and Fall',
  date: 'July 08, 2024',
  tags: ['Financial','Business',"Economics",'Non Fiction','Riches To Rags'],
  image: 'images/lehmanbrothers.jpg',
  author: 'H Derick',
            bio: " I'm Derick, a budding journalist with a keen interest in unraveling the intricacies of finance, economy, and politics. Here, I explore the stories behind the numbers, delving deep into the impacts of policies, market trends, and global dynamics.",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 26,
            title: 'Rise and Fall of Nokia',
            date: 'July 09, 2024',
            tags: ['Financial','Business',"Economics",'Non Fiction','Riches To Rags'],
            image: 'images/nokia.jpg',
            author: 'H Derick',
            bio: "I'm Derick, a budding journalist with a keen interest in unraveling the intricacies of finance, economy, and politics. Here, I explore the stories behind the numbers, delving deep into the impacts of policies, market trends, and global dynamics.",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            id: 27,
            title: 'Hearts Entwined: Against All Odds',
            date: 'July 08, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','Indonesia','Fantasy'],
            image: 'images/heartentiwined1.jpg',
            author: 'Emily',
            bio: "",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            
            id: 28,
            title: 'The Bull Called Delightful',
            date: 'July 06, 2024',
            tags: ['Folktale','Family',"Children's",'Buddhist'],
            image: 'images/550-1.jpg',
            author: 'Chaan99',
            bio: "",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            
            id: 29,
            title: 'Tenali Rama’s Dream',
            date: 'July 09, 2024',
            tags: ['Folktale','Family',"Children's",'Historical','India'],
            image: 'images/tenalirama.jpg',
            author: 'Mukesh Kumar',
            bio: "",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
        {
            
            id: 30,
            title: 'The Mongoose and the Farmer’s Wife',
            date: 'July 09, 2024',
            tags: ['Folktale','Family',"Children's",'Fiction','India'],
            image: 'images/farmerwife.jpg',
            author: 'Mukesh Kumar',
            bio: "",
            description: 'Short description of the story...',
            content: 'Full content of the story...',
            chapters: [
                {
                    chapterNumber: 1,
                    title: 'The Investigation',
                    content: 'The night was dark, and the streets were empty...'
                },
                // Add more chapters
            ]
        },
       
       
        // Add more stories here
    ];

    const searchInput = document.getElementById('search');
    const tagButtons = document.querySelectorAll('.tag');
    const authorProfile = document.getElementById('author-profile');

    function displayStories(filteredStories) {
        const tbody = document.querySelector('#stories-table tbody');
        tbody.innerHTML = '';
        filteredStories.sort((a, b) => a.title.localeCompare(b.title)).forEach(story => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><a href="story.html?id=${story.id}">${story.title}</a></td>
                <td>${story.author}</td>
            `;
            tbody.appendChild(row);
        });
    }

    function filterStories(tagFilter) {
        const query = searchInput ? searchInput.value.toLowerCase() : '';
        const filteredStories = stories.filter(story => {
            const matchesSearch = story.title.toLowerCase().includes(query);
            const matchesTag = !tagFilter || story.tags.includes(tagFilter);
            return matchesSearch && matchesTag;
        });
        displayStories(filteredStories);
    }

    function displayAuthorDetails(authorName) {
        const authorStories = stories.filter(story => story.author === authorName);
        if (authorStories.length > 0) {
            const author = authorStories[0];
            document.getElementById('author-name').textContent = author.author;
            document.getElementById('author-bio').textContent = author.bio;

            const authorStoriesTbody = document.getElementById('author-stories');
            authorStoriesTbody.innerHTML = '';
            authorStories.forEach(story => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><a href="story.html?id=${story.id}">${story.title}</a></td>
                    <td>${story.date}</td>
                `;
                authorStoriesTbody.appendChild(row);
            });
        }
    }

    if (authorProfile) {
        const urlParams = new URLSearchParams(window.location.search);
        const authorName = urlParams.get('name');
        if (authorName) {
            displayAuthorDetails(authorName);
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => filterStories(null));
    }

    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            tagButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterStories(button.dataset.tag);
        });
    });

    displayStories(stories);
});
