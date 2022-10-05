const allSections = document.querySelectorAll('.section');
const menuItem = document.querySelectorAll('a');

const options = {
	threshold: [0.5, 0.5],
};

const scrollSpy = (entries) => {
	entries.forEach((entry) => {
		const tagSection = document.querySelector(`a[href*="${entry.target.id}"]`);
		tagSection.classList.remove('active');
		if (entry.isIntersecting) {
			tagSection.classList.add('active');
		}
	});
};
const observer = new IntersectionObserver(scrollSpy, options);
allSections.forEach((section) => observer.observe(section));

// const scrollSpy = (entries) => {
// 	entries.forEach(entry=> console.log(entry.target.id))
// 	const activeSection = document.querySelector(``)

// };

// const observer = new IntersectionObserver(scrollSpy);
// allSections.forEach((section) => observer.observe(section));
