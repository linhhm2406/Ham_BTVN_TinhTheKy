let input_year = parseInt(prompt('Mời nhập vào số năm cần kiểm tra'));

function calculate_century(year) {
    return Math.ceil(year / 100);
}

alert('Năm '+input_year + ' thuộc thế kỷ '+ calculate_century(input_year));