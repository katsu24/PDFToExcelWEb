// 言語切り替え
function toggleLanguage() {
    const enTitleExcel = document.getElementById('en-title_excel');
    const jpTitleExcel = document.getElementById('jp-title_excel');
    const enTitleWord = document.getElementById('en-title_word');
    const jpTitleWord = document.getElementById('jp-title_word');
    const enDescriptionExcel = document.getElementById('en-description_excel');
    const jpDescriptionExcel = document.getElementById('jp-description_excel');
    const enDescriptionWord = document.getElementById('en-description_word');
    const jpDescriptionWord = document.getElementById('jp-description_word');
    const enNotice = document.getElementById('en-notice');
    const jpNotice = document.getElementById('jp-notice');
    const submitButtonExcel = document.getElementById('submit-button_excel');
    const submitButtonWord = document.getElementById('submit-button_word');

    if (enDescriptionExcel.style.display === 'none') {
        enDescriptionExcel.style.display = 'block';
        jpDescriptionExcel.style.display = 'none';
        enDescriptionWord.style.display = 'block';
        jpDescriptionWord.style.display = 'none';
        enNotice.style.display = 'block';
        jpNotice.style.display = 'none';
        enTitleExcel.style.display = 'block';
        jpTitleExcel.style.display = 'none';
        enTitleWord.style.display = 'block';
        jpTitleWord.style.display = 'none';
        submitButtonExcel.value = 'Upload and Convert';
        submitButtonWord.value = 'Upload and Convert';
    } else {
        enDescriptionExcel.style.display = 'none';
        jpDescriptionExcel.style.display = 'block';
        enDescriptionWord.style.display = 'none';
        jpDescriptionWord.style.display = 'block';
        enNotice.style.display = 'none';
        jpNotice.style.display = 'block';
        enTitleExcel.style.display = 'none';
        jpTitleExcel.style.display = 'block';
        enTitleWord.style.display = 'none';
        jpTitleWord.style.display = 'block';
        submitButtonExcel.value = 'アップロードして変換';
        submitButtonWord.value = 'アップロードして変換';
    }
}
// タブ切り替え
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}