// Smooth scrolling and navigation
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Navigation scroll handler
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            const scrolled = window.scrollY > 50;
            
            if (scrolled) {
                navbar.style.background = 'rgba(255, 255, 255, 0.8)';
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.style.borderBottom = 'none';
            }

            // Update active navigation link
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const element = document.getElementById(section);
                const navLink = document.querySelector(`[data-section="${section}"]`);
                
                if (element && navLink) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                        navLink.classList.add('active');
                    }
                }
            });
        });

        // Create background particles
        function createParticles(containerId, count = 20) {
            const container = document.getElementById(containerId);
            if (!container) return;

            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = 'absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 3 + 's';
                particle.style.animationDuration = (2 + Math.random() * 3) + 's';
                container.appendChild(particle);
            }
        }

        // Initialize particles
        createParticles('bg-particles');
        createParticles('skills-particles', 15);

        // Skills data and initialization
        const technicalSkills = [
            { name: 'HTML/CSS', level: 85, color: 'from-orange-500 to-red-500' },
            { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-orange-500' },
            { name: 'React.js', level: 70, color: 'from-blue-500 to-cyan-500' },
            { name: 'Python', level: 65, color: 'from-green-500 to-blue-500' },
            { name: 'Web Design', level: 80, color: 'from-purple-500 to-pink-500' },
            { name: 'Git/GitHub', level: 75, color: 'from-gray-600 to-gray-800' }
        ];

        const professionalSkills = [
            { name: 'Problem Solving', level: 90, icon: '🧩' },
            { name: 'Team Collaboration', level: 85, icon: '🤝' },
            { name: 'Communication', level: 95, icon: '💬' },
            { name: 'Project Management', level: 85, icon: '📋' },
            { name: 'Creative Thinking', level: 88, icon: '💡' },
            { name: 'Leadership', level: 90, icon: '👑' }
        ];

        const tools = [
            { name: 'VS Code', icon: '💻' },
            { name: 'Figma', icon: '🎨' },
            { name: 'Photoshop', icon: '📸' },
            { name: 'Chrome DevTools', icon: '🔧' }
        ];

        // Populate technical skills
        function initializeTechnicalSkills() {
            const container = document.getElementById('technical-skills');
            container.innerHTML = '';

            technicalSkills.forEach((skill, index) => {
                const skillDiv = document.createElement('div');
                skillDiv.className = 'group';
                skillDiv.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            ${skill.name}
                        </span>
                        <span class="text-sm font-medium text-gray-600">
                            ${skill.level}%
                        </span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div class="skill-bar h-full bg-gradient-to-r ${skill.color} rounded-full" 
                             style="width: 0%; transition-delay: ${index * 200}ms"></div>
                    </div>
                `;
                container.appendChild(skillDiv);
            });
        }

        // Populate professional skills
        function initializeProfessionalSkills() {
            const container = document.getElementById('professional-skills');
            container.innerHTML = '';

            professionalSkills.forEach((skill, index) => {
                const skillDiv = document.createElement('div');
                skillDiv.className = 'group';
                skillDiv.innerHTML = `
                    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl group-hover:scale-125 transition-transform duration-300">
                                    ${skill.icon}
                                </span>
                                <span class="font-medium text-gray-800">
                                    ${skill.name}
                                </span>
                            </div>
                            <span class="text-sm font-medium text-blue-600">
                                ${skill.level}%
                            </span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="skill-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
                                 style="width: 0%; transition-delay: ${index * 150}ms"></div>
                        </div>
                    </div>
                `;
                container.appendChild(skillDiv);
            });
        }

        // Populate tools
        function initializeTools() {
            const container = document.getElementById('tools');
            container.innerHTML = '';

            tools.forEach((tool, index) => {
                const toolDiv = document.createElement('div');
                toolDiv.className = 'group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-100';
                toolDiv.style.animationDelay = `${index * 100}ms`;
                toolDiv.innerHTML = `
                    <div class="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                        ${tool.icon}
                    </div>
                    <div class="font-medium text-sm text-gray-800">
                        ${tool.name}
                    </div>
                `;
                container.appendChild(toolDiv);
            });
        }

        // Skills intersection observer
        function initializeSkillsObserver() {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Animate technical skills
                            const technicalBars = document.querySelectorAll('#technical-skills .skill-bar');
                            technicalBars.forEach((bar, index) => {
                                setTimeout(() => {
                                    bar.style.width = technicalSkills[index].level + '%';
                                }, index * 200);
                            });

                            // Animate professional skills
                            const professionalBars = document.querySelectorAll('#professional-skills .skill-bar');
                            professionalBars.forEach((bar, index) => {
                                setTimeout(() => {
                                    bar.style.width = professionalSkills[index].level + '%';
                                }, index * 150);
                            });

                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.3 }
            );

            const skillsSection = document.getElementById('skills');
            if (skillsSection) observer.observe(skillsSection);
        }

        // Contact form handler
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple form validation
            if (name && email && message) {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset(); // Clear form
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Navigation click handlers
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section');
                scrollToSection(sectionId);
            });
        });

        // Custom cursor effect
        document.addEventListener('DOMContentLoaded', function() {
            const cursor = document.createElement('div');
            cursor.className = 'fixed w-4 h-4 bg-blue-500/50 rounded-full pointer-events-none z-50 transition-transform duration-150';
            cursor.style.display = 'none';
            document.body.appendChild(cursor);

            document.addEventListener('mousemove', (e) => {
                cursor.style.display = 'block';
                cursor.style.left = e.clientX - 8 + 'px';
                cursor.style.top = e.clientY - 8 + 'px';
            });

            document.addEventListener('mouseleave', () => {
                cursor.style.display = 'none';
            });
        });

        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initializeTechnicalSkills();
            initializeProfessionalSkills();
            initializeTools();
            initializeSkillsObserver();
        });