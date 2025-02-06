// Initial cards data
const cards = {
  Happy: [
    {
      id: 1,
      message: "Seeing you smile makes my whole day brighter, Alhamdulillah!",
      arabicMessage: "رؤية ابتسامتك تجعل يومي أكثر إشراقًا، الحمد لله!",
    },
    {
      id: 2,
      message: "You are my sunshine even on a cloudy day, Habibti! ☀️",
      arabicMessage: "أنت شمسي حتى في الأيام الغائمة، حبيبتي! ☀️",
    },
    {
      id: 3,
      message: "Your happiness is a gift I cherish every day, ya amar. 🎁",
      arabicMessage: "سعادتك هدية أعتز بها كل يوم، يا قمر. 🎁",
    },
    {
      id: 4,
      message: "Mayyah, your joy is contagious! You light up my world. ✨",
      arabicMessage: "ميّة، فرحك معدي! أنت تنيرين عالمي. ✨",
    },
    {
      id: 5,
      message: "With you, every moment is a celebration, Alhamdulillah! 🎉",
      arabicMessage: "معك، كل لحظة هي احتفال، الحمد لله! 🎉",
    },
  ],
  Sad: [
    {
      id: 6,
      message: "No matter what, I'm always here to hold you, qalbi. ❤️",
      arabicMessage: "مهما كان، أنا دائمًا هنا لأمسك بيدك، قلبي. ❤️",
    },
    {
      id: 7,
      message: "If the world feels heavy today, let me carry some of it for you, inshaAllah. 🤗",
      arabicMessage: "إذا كان العالم يبدو ثقيلاً اليوم، دعني أحمل بعضه عنك، إن شاء الله. 🤗",
    },
    {
      id: 8,
      message: "Your strength amazes me, even in tough times. I'm here for you, habibti. 💪",
      arabicMessage: "قوتك تذهلني، حتى في الأوقات الصعبة. أنا هنا من أجلك، حبيبتي. 💪",
    },
    {
      id: 9,
      message: "This too shall pass, ya rouhi. Better days are coming, inshaAllah. 🌅",
      arabicMessage: "هذا أيضًا سيمر، يا روحي. أيام أفضل قادمة، إن شاء الله. 🌅",
    },
    {
      id: 10,
      message: "Let me be your comfort, Mayyah. You're never alone in this. 🤍",
      arabicMessage: "دعيني أكون راحتك، ميّة. أنت لست وحدك في هذا أبدًا. 🤍",
    },
  ],
  Tired: [
    {
      id: 11,
      message: "Rest, love. You deserve it. I'll always be your safe place, hayati. 😴",
      arabicMessage: "استرحي يا حبيبتي، تستحقين ذلك. سأكون دائمًا مكانك الآمن، حياتي. 😴",
    },
    {
      id: 12,
      message: "Close your eyes, take a deep breath, and imagine me holding you, qalbi. 🤍",
      arabicMessage: "أغمضي عينيك، خذي نفسًا عميقًا، وتخيلي أنني أحتضنك، قلبي. 🤍",
    },
    {
      id: 13,
      message: "You've done enough today, Mayyah. Time to recharge, habibti. 🔋",
      arabicMessage: "لقد فعلت ما يكفي اليوم، ميّة. حان وقت إعادة الشحن، حبيبتي. 🔋",
    },
    {
      id: 14,
      message: "Your hard work never goes unnoticed. Now, let's focus on your rest. 💤",
      arabicMessage: "عملك الجاد لا يمر دون أن يلاحظه أحد. الآن، دعينا نركز على راحتك. 💤",
    },
    {
      id: 15,
      message: "I wish I could take away your tiredness. Let me comfort you, ya amar. 🌙",
      arabicMessage: "أتمنى لو أستطيع أن أزيل تعبك. دعيني أريحك، يا قمر. 🌙",
    },
  ],
  Excited: [
    {
      id: 16,
      message: "Your energy is contagious, habibti! Let's celebrate today together! 🎉",
      arabicMessage: "طاقتك معدية، حبيبتي! لنحتفل معًا اليوم! 🎉",
    },
    {
      id: 17,
      message: "I love seeing you so happy! You deserve every bit of joy, Alhamdulillah!",
      arabicMessage: "أحب رؤيتك سعيدة! تستحقين كل لحظة من الفرح، الحمد لله!",
    },
    {
      id: 18,
      message: "Your excitement lights up my world, Mayyah! What shall we do today? 🌟",
      arabicMessage: "حماسك ينير عالمي، ميّة! ماذا سنفعل اليوم؟ 🌟",
    },
    {
      id: 19,
      message: "I'm thrilled to see you so excited! Your joy is my joy, habibti. 😊",
      arabicMessage: "أنا متحمس لرؤيتك بهذا الحماس! فرحك هو فرحي، حبيبتي. 😊",
    },
    {
      id: 20,
      message: "Your enthusiasm is inspiring, ya amar! Let's make amazing memories today! 📸",
      arabicMessage: "حماسك ملهم، يا قمر! لنصنع ذكريات رائعة اليوم! 📸",
    },
  ],
  Loved: [
    {
      id: 21,
      message: "Every day with you is a blessing, inshaAllah. I love you more than words can say. ❤️",
      arabicMessage: "كل يوم معك هو نعمة، إن شاء الله. أحبك أكثر مما تستطيع الكلمات التعبير عنه. ❤️",
    },
    {
      id: 22,
      message: "You are the love of my life, now and always, hayati. 💞",
      arabicMessage: "أنت حب حياتي، الآن ودائمًا، حياتي. 💞",
    },
    {
      id: 23,
      message: "Mayyah, my love for you grows stronger with each passing day. 🌱",
      arabicMessage: "ميّة، حبي لك يزداد قوة مع مرور كل يوم. 🌱",
    },
    {
      id: 24,
      message: "You're the duaa I never knew I needed, Alhamdulillah for you. 🤲",
      arabicMessage: "أنت الدعاء الذي لم أكن أعرف أنني بحاجة إليه، الحمد لله عليك. 🤲",
    },
    {
      id: 25,
      message: "In your love, I found my home, ya rouhi. Forever grateful for you. 🏡",
      arabicMessage: "في حبك، وجدت وطني، يا روحي. ممتن لك إلى الأبد. 🏡",
    },
  ],
}

// Playlist data
const playlist = [
  { title: "Kalam Eineh - Sherine", src: "music/kalam-eineh-sherine.mp3" },
  { title: "Nights Like This - Kid Laroi", src: "music/nights.mp3" },
  { title: "Oupie Goupie Special", src: "music/Oupie.mp3" },
  { title: "Lady Gaga", src: "music/lady.mp3" },
  { title: "Caught in a blue - Stephen Sanchez", src: "music/blue.mp3" }
]


let currentLanguage = "en"
let currentSong = 0
let isPlaying = false
let currentMood = ""

// DOM elements
const languageToggle = document.getElementById("languageToggle")
const moodTitle = document.getElementById("moodTitle")
const moodButtons = document.querySelectorAll(".mood-button")
const cardGrid = document.getElementById("cardGrid")
const addCardButton = document.getElementById("addCard")
const audioPlayer = document.getElementById("audioPlayer")
const playPauseButton = document.getElementById("playPause")
const nextSongButton = document.getElementById("nextSong")
const songTitle = document.getElementById("songTitle")
const nowPlaying = document.getElementById("nowPlaying")
const volumeControl = document.getElementById("volumeControl")

// Language toggle
languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "ar" : "en"
  updateLanguage()
})

// Mood selection
moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    moodButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")
    currentMood = button.dataset.mood
    renderCards()
  })
})

// Add new card
addCardButton.addEventListener("click", () => {
  if (currentMood) {
    const newId = Math.max(...cards[currentMood].map((card) => card.id)) + 1
    const newCard = {
      id: newId,
      message: `Mayyah, you're the ${newId} reason I smile every day, habibti!`,
      arabicMessage: `ميّة، أنت السبب رقم ${newId} لابتسامتي كل يوم، حبيبتي!`,
    }
    cards[currentMood].push(newCard)
    renderCards()
    triggerConfetti()
  }
})

// Hidden Love Note Reveal
document.getElementById("revealNote").addEventListener("click", function() {
  const loveNoteText = document.getElementById("loveNoteText");
  loveNoteText.style.display = "block";
  this.style.display = "none"; // Hide button after clicking
});

// Music player
playPauseButton.addEventListener("click", togglePlay)
nextSongButton.addEventListener("click", nextSong)
audioPlayer.addEventListener("ended", nextSong)
volumeControl.addEventListener("input", (e) => {
  audioPlayer.volume = e.target.value
})

// Render cards
function renderCards() {
  cardGrid.innerHTML = ""
  if (currentMood && cards[currentMood]) {
    cards[currentMood].forEach((card) => {
      const cardElement = document.createElement("div")
      cardElement.className = "card"
      cardElement.innerHTML = `
                <div class="card-front">❤️</div>
                <div class="card-back">${currentLanguage === "en" ? card.message : card.arabicMessage}</div>
            `
      cardElement.addEventListener("click", () => {
        cardElement.classList.toggle("flipped")
        if (cardElement.classList.contains("flipped")) {
          triggerConfetti()
        }
      })
      cardGrid.appendChild(cardElement)
    })
  }
}

// Update language
function updateLanguage() {
  document.documentElement.lang = currentLanguage
  document.body.dir = currentLanguage === "ar" ? "rtl" : "ltr"
  languageToggle.textContent = currentLanguage === "en" ? "العربية" : "English"
  moodTitle.textContent = currentLanguage === "en" ? "How are you feeling today, Mayyah?" : "كيف تشعرين اليوم، ميّة؟"
  addCardButton.innerHTML =
    currentLanguage === "en"
      ? '<i class="fas fa-plus"></i> <span>Add New Card</span>'
      : '<i class="fas fa-plus"></i> <span>إضافة بطاقة جديدة</span>'
  nowPlaying.textContent = currentLanguage === "en" ? "Now Playing" : "يشغل الآن"
  moodButtons.forEach((button) => {
    const mood = button.dataset.mood
    button.innerHTML = `<i class="fas fa-${getMoodIcon(mood)}"></i> <span>${currentLanguage === "en" ? mood : translateMood(mood)}</span>`
  })
  renderCards()
}

// Translate mood to Arabic
function translateMood(mood) {
  const moodTranslations = {
    Happy: "سعيدة",
    Sad: "حزينة",
    Tired: "متعبة",
    Excited: "متحمسة",
    Loved: "محبوبة",
  }
  return moodTranslations[mood] || mood
}

// Get mood icon
function getMoodIcon(mood) {
  const moodIcons = {
    Happy: "smile",
    Sad: "frown",
    Tired: "bed",
    Excited: "grin-stars",
    Loved: "heart",
  }
  return moodIcons[mood] || "question"
}

// Toggle play/pause
function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause()
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>'
  } else {
    audioPlayer.play()
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'
  }
  isPlaying = !isPlaying
}

// Play next song
function nextSong() {
  currentSong = (currentSong + 1) % playlist.length
  loadSong()
}

// Load song
function loadSong() {
  audioPlayer.src = playlist[currentSong].src
  songTitle.textContent = playlist[currentSong].title
  if (isPlaying) {
    audioPlayer.play()
  }
}

// Check for special occasions
function isSpecialOccasion() {
  const today = new Date()
  const dayOfWeek = today.getDay()
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
  const isAnniversary = today.getDate() === 14
  const isRandomSpecialDay = Math.random() < 0.1
  return isWeekend || isAnniversary || isRandomSpecialDay
}

// Trigger confetti
function triggerConfetti() {
  //Import confetti function here.  Assuming it's from a library like 'canvas-confetti'
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  })
}

// Initialize
function init() {
  updateLanguage()
  loadSong()
}

init()

