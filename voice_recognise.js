import { voiceRecognition, voiceRecognitionSearchMap, voiceRecognitionSearchMusic } from "./utils/actions.js";
import { getMusic, getPlace, isSearchMap, isSearchMusic } from "./utils/filter.js";

// Kiểm tra xem trình duyệt có hỗ trợ SpeechRecognition không
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const btn = document.getElementById('start');

if (SpeechRecognition) {
  // Tạo một thể hiện mới của SpeechRecognition
  const recognition = new SpeechRecognition();

  // Đặt một số thuộc tính cho việc nhận diện
  recognition.continuous = false;
  recognition.lang = "vi-VN"; // Sử dụng tiếng Việt
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  // Bắt đầu nhận diện khi màn hình được nhấp vào
  document.getElementById('start').onclick = () => {
    btn.textContent = "Listening...";
    recognition.start();
    console.log("Sẵn sàng nhận lệnh bằng giọng nói.");
  };

  // Xử lý sự kiện kết quả
  recognition.onresult = (event) => {
    // Lấy chuỗi văn bản đã nhận diện được
    const text = event.results[0][0].transcript;
    // Xử lý chuỗi văn bản để biết được người dùng vừa đọc gì
    console.log(`Kết quả nhận được: ${text}.`);

    const flagSearchMap = isSearchMap(text);
    const flagSearchMusic = isSearchMusic(text);

    if (flagSearchMap && !flagSearchMusic) {
        const place = getPlace(text);
        voiceRecognitionSearchMap(place);
    } else if (flagSearchMusic && !flagSearchMap) {
        const music = getMusic(text);
        voiceRecognitionSearchMusic(music);
    } else {
        voiceRecognition(text.replace('.', ''));
    }
  };

  // Dừng nhận diện khi giọng nói kết thúc
  recognition.onspeechend = () => {
    btn.textContent = "Start";
    recognition.stop();
  };
  
  // Xử lý lỗi
  recognition.onerror = (event) => {
    console.error("Lỗi nhận diện giọng nói: ", event.error);
  };
} else {
  console.error("Trình duyệt của bạn không hỗ trợ SpeechRecognition.");
}
