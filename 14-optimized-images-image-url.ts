// Lecture_14 Optimizied Images
const getCroppedImageUrl = (url: string) => {
    // In a word "Bangla"
    // indexOf("g") = 3; indexOf("ngl") = 2 ('ngl' starts in index '2')
    // const index = url.indexOf('media/');    // retrieves the index where 'media/' starts!
    // BUT we want the index where 'media/' ends
    // const index = url.indexOf('media/') + 'media/'.length;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;  // index where 'media/' ends
    // array.slice(0, n) means "0" to "n-1"
    // array.slice(n) means "n" to ENDPOINT
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;