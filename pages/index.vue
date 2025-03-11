<template>
  <div>
    <!-- Hero Section -->
    <section 
      class="min-h-[80vh] flex items-center justify-center py-20 text-center relative overflow-hidden"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
      :when-in-view="{ amount: 0.2 }"
    >
      <!-- Background with overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
      <div class="absolute inset-0">
        <div class="absolute inset-0 opacity-10">
          <!-- Large geometric shapes -->
          <div class="absolute top-10 left-1/4 w-64 h-64 border-2 border-primary rounded-full transform rotate-45"></div>
          <div class="absolute -bottom-10 right-1/4 w-72 h-72 border-2 border-secondary rounded-lg transform -rotate-12"></div>
          <div class="absolute top-1/3 right-1/4 w-40 h-40 border border-primary rounded-full animate-pulse"></div>
          <div class="absolute bottom-1/3 left-1/3 w-48 h-48 border border-secondary rounded-lg transform rotate-12"></div>
          
          <!-- Medium geometric shapes -->
          <div class="absolute top-20 right-1/3 w-32 h-32 border border-primary/70 rounded-full transform -rotate-45"></div>
          <div class="absolute bottom-1/4 left-20 w-36 h-36 border border-secondary/70 rounded-lg transform rotate-6"></div>
          <div class="absolute top-1/2 left-1/4 w-24 h-24 border border-primary/50 rounded-full animate-pulse"></div>
          
          <!-- Small geometric shapes -->
          <div class="absolute top-32 left-10 w-16 h-16 border border-secondary/60 rounded-lg transform rotate-45"></div>
          <div class="absolute bottom-40 right-16 w-20 h-20 border border-primary/60 rounded-full"></div>
          <div class="absolute top-3/4 right-1/3 w-12 h-12 border border-secondary/50 rounded-lg transform -rotate-12"></div>
          
          <!-- Code-like patterns -->
          <div class="absolute top-20 left-10 text-4xl text-primary/15 font-mono">{ }</div>
          <div class="absolute bottom-20 right-10 text-3xl text-secondary/15 font-mono">< /></div>
          <div class="absolute top-1/2 right-20 text-5xl text-primary/15 font-mono">//</div>
          <div class="absolute bottom-1/3 left-20 text-2xl text-secondary/15 font-mono">const</div>
          <div class="absolute top-1/4 right-1/3 text-3xl text-primary/15 font-mono">=></div>
          <div class="absolute bottom-1/2 left-1/3 text-4xl text-secondary/15 font-mono">;</div>
          
          <!-- Dots and small details -->
          <div class="absolute top-1/4 left-1/2 w-2 h-2 bg-primary/20 rounded-full"></div>
          <div class="absolute bottom-1/3 right-1/2 w-2 h-2 bg-secondary/20 rounded-full"></div>
          <div class="absolute top-2/3 left-1/4 w-2 h-2 bg-primary/20 rounded-full"></div>
          <div class="absolute bottom-1/4 right-1/4 w-2 h-2 bg-secondary/20 rounded-full"></div>
          
          <!-- Tech grid pattern -->
          <div class="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#2962B3_1px,transparent_1px),linear-gradient(to_bottom,#2962B3_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-white/75 via-white/85 to-white/90 backdrop-blur-[1px]"></div>
      
      <!-- Content -->
      <div class="max-w-4xl mx-auto px-4 relative">
        <div 
          class="mb-6 relative"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          <h2 
            class="text-3xl md:text-4xl font-bold mb-4 text-primary"
          >
            Manuel Waltschek
          </h2>
          <div class="relative inline-block">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>
            <img 
              src="/images/profile_picture.jpg" 
              alt="Manuel Waltschek" 
              class="relative w-48 h-48 rounded-full shadow-xl border-4 border-white object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <h1 
          class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          Senior Software Developer
        </h1>
        <p 
          class="text-xl md:text-2xl text-gray-600 mb-4"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 400, duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          Specializing in Spring Framework, Web Services, and AI-Powered Development
        </p>
        <p 
          class="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 500, duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          I'm a software engineer passionate about building robust web services and exploring emerging AI technologies. 
          With expertise in Spring Framework and a background in GIS and mobility solutions, I'm currently focused on 
          creating AI-powered applications and developer tools. I'm particularly excited about agentic AI and documenting my 
          journey with technologies like Spring AI and Windsurf IDE. Through my blog, I share insights on best practices, 
          clean code, and the practical applications of AI in software development.
        </p>
        <div 
          class="flex flex-col sm:flex-row justify-center gap-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          <a 
            href="/blog" 
            class="bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
            </svg>
            Read My Blog
          </a>
          <a 
            href="/cv.pdf" 
            class="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
          <a 
            href="#contact" 
            class="bg-secondary text-white px-8 py-4 rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            Let's Connect
          </a>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-gray-50/30"></div>
      <div class="absolute left-0 right-0 bottom-0 transform">
        <svg class="fill-gray-50" viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48h1440V0c-211.28 42.6-422.4 48-634.8 48C592.8 48 381.6 42.6 0 0v48z"></path>
        </svg>
      </div>
    </div>

    <!-- Expertise Section -->
    <section 
      id="expertise" 
      class="py-20 bg-gradient-to-b from-gray-50 to-gray-50/70 relative overflow-hidden"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 600 } }"
      :when-in-view="{ amount: 0.2 }"
    >
      <!-- Decorative tech patterns -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[linear-gradient(45deg,#2962B3_1px,transparent_1px),linear-gradient(-45deg,#2962B3_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div class="max-w-5xl mx-auto px-4">
        <h2 
          class="text-4xl font-bold text-center mb-16 text-primary"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          <div class="flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Areas of Expertise
          </div>
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="(item, index) in expertise" 
            :key="index"
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200 * index, duration: 600 } }"
            :when-in-view="{ amount: 0.2 }"
          >
            <div class="flex items-start gap-4">
              <div class="text-primary" v-html="item.icon"></div>
              <div>
                <h3 class="text-2xl font-semibold mb-4 text-primary">{{ item.title }}</h3>
                <p class="text-gray-600 text-lg leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white/30"></div>
      <div class="absolute left-0 right-0 bottom-0 transform rotate-180">
        <svg class="fill-white" viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48h1440V0c-211.28 42.6-422.4 48-634.8 48C592.8 48 381.6 42.6 0 0v48z"></path>
        </svg>
      </div>
    </div>

    <!-- Tools Section -->
    <section
      id="tools" 
      class="py-20 bg-gradient-to-b from-white to-white relative overflow-hidden"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 600 } }"
      :when-in-view="{ amount: 0.2 }"
    >
      <!-- Decorative Background -->
      <div class="absolute inset-0">
        <!-- Tech Pattern Background -->
        <div class="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#2962B3_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <!-- Floating Elements -->
        <div class="absolute top-10 left-10 w-40 h-40 border-4 border-primary/20 rounded-full animate-float-slow"></div>
        <div class="absolute top-40 right-20 w-20 h-20 bg-primary/10 rounded-lg transform rotate-45 animate-float-slower"></div>
        <div class="absolute bottom-20 left-1/4 w-32 h-32 border-2 border-secondary/20 rounded-lg transform -rotate-12 animate-float"></div>
        <div class="absolute bottom-40 right-1/3 w-24 h-24 bg-secondary/10 rounded-full animate-float-slower"></div>
        
        <!-- Code Lines Background -->
        <div class="absolute inset-0 overflow-hidden opacity-[0.03]">
          <div class="absolute top-0 left-0 w-full h-full flex flex-col gap-4 animate-slide-up-slow">
            <div v-for="n in 20" :key="n" 
              class="h-3 bg-primary rounded-full" 
              :style="{ width: Math.random() * 60 + 20 + '%', marginLeft: Math.random() * 20 + '%' }">
            </div>
          </div>
        </div>
      </div>
      
      <div class="max-w-6xl mx-auto px-4 relative">
        <h2 
          class="text-4xl font-bold text-center mb-16 text-primary"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          <div class="flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Skills, Tools & Technologies
          </div>
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            v-for="(category, index) in tools" 
            :key="category.name"
            class="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 * index, duration: 600 } }"
            :when-in-view="{ amount: 0.2 }"
          >
            <div class="mb-6">
              <h3 class="text-2xl font-semibold text-primary flex items-center gap-3 mb-3">
                <!-- Languages & Frameworks -->
                <svg v-if="category.name === 'Languages & Frameworks'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <!-- Data Management -->
                <svg v-if="category.name === 'Data Management'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <!-- API Development -->
                <svg v-if="category.name === 'API Development'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <!-- AI Tools -->
                <svg v-if="category.name === 'AI Tools'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <!-- Cloud & Infrastructure -->
                <svg v-if="category.name === 'Cloud, Platform & Infrastructure'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <!-- Development Process -->
                <svg v-if="category.name === 'Development Process'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{{ category.name }}</span>
                <div class="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent"></div>
              </h3>
              <p class="text-gray-600 text-sm italic">{{ category.description }}</p>
            </div>
            <div class="space-y-6">
              <template v-for="group in [...new Set(category.items.map(item => item.group))]" :key="group">
                <div v-if="group" class="space-y-3">
                  <h4 class="text-lg font-medium text-gray-600">{{ group }}</h4>
                  <div 
                    v-for="tool in category.items.filter(item => item.group === group)" 
                    :key="tool.name"
                    class="flex items-center gap-3 group p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 ml-2"
                  >
                    <div 
                      class="w-2 h-2 rounded-full group-hover:scale-150 transition-transform duration-300"
                      :class="{
                        'bg-primary': tool.expertise === 'Primary',
                        'bg-secondary': tool.expertise === 'Advanced',
                        'bg-gray-400': tool.expertise === 'Basic'
                      }"
                    ></div>
                    <span class="text-gray-700 text-lg">{{ tool.name }}</span>
                    <span 
                      class="ml-auto text-sm font-medium px-2 py-1 rounded-full"
                      :class="{
                        'bg-primary/10 text-primary': tool.expertise === 'Primary',
                        'bg-secondary/10 text-secondary': tool.expertise === 'Advanced',
                        'bg-gray-100 text-gray-600': tool.expertise === 'Basic'
                      }"
                    >
                      {{ tool.expertise }}
                    </span>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-gray-50/30"></div>
      <div class="absolute left-0 right-0 bottom-0 transform">
        <svg class="fill-gray-50" viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48h1440V0c-211.28 42.6-422.4 48-634.8 48C592.8 48 381.6 42.6 0 0v48z"></path>
        </svg>
      </div>
    </div>

    <!-- Contact Section -->
    <section 
      id="contact"
      class="py-20 bg-gradient-to-b from-gray-50 to-gray-50 relative overflow-hidden"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      :when-in-view="{ amount: 0.2 }"
    >
      <!-- Decorative Background -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#2962B3_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 
          class="text-4xl font-bold mb-8 text-primary inline-flex items-center gap-3"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
          Let's Connect
        </h2>
        <div 
          class="max-w-2xl mx-auto text-center mb-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          <p class="text-lg text-gray-600 mb-6">
            I'm passionate about building scalable solutions and sharing knowledge within the tech community. Currently based in Vienna, Austria, but open to hybrid remote opportunities worldwide. As a native German speaker with extensive experience in international teams, I'm well-equipped for global collaboration.
          </p>
          <p class="text-lg text-gray-600 mb-8">
            Whether you're looking for a seasoned full-stack developer or want to discuss potential collaborations, I'd love to connect and explore how we can work together.
          </p>
        </div>
        <div 
          class="flex flex-col items-center gap-4 mb-12 text-lg"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          <div class="flex items-center gap-6 flex-wrap justify-center">
            <p class="flex items-center gap-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Vienna, Austria (Open to Remote/Hybrid)
            </p>
            <p class="flex items-center gap-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              Native German Speaker
            </p>
          </div>
          <a 
            href="mailto:manuel.waltschek@gmail.com" 
            class="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            manuel.waltschek@gmail.com
          </a>
        </div>
        <div 
          class="bg-primary/5 rounded-xl p-6 mb-12 max-w-2xl mx-auto border border-primary/10"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          <p class="text-xl font-medium text-primary mb-2">Next Career Move</p>
          <p class="text-gray-600">
            Available for new opportunities from May 2025. Open to international positions with hybrid remote work arrangements.
          </p>
        </div>
        <div 
          class="flex justify-center gap-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
          :when-in-view="{ amount: 0.2 }"
        >
          <a 
            href="https://github.com/manuelwaltschek" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110 flex items-center gap-2"
            title="GitHub"
          >
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/manuel-waltschek-b97218198/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110 flex items-center gap-2"
            title="LinkedIn"
          >
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="mailto:manuel.waltschek@gmail.com" 
            class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110 flex items-center gap-2"
            title="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Similar to Angular's component class
interface TechItem {
  name: string;
  expertise: 'Primary' | 'Advanced' | 'Basic';
  group?: string;
}

interface TechCategory {
  name: string;
  description: string;
  items: TechItem[];
}

const tools: TechCategory[] = [
  {
    name: 'Languages & Frameworks',
    description: 'Full-stack development technologies',
    items: [
      { name: 'Java & Spring (Boot)', expertise: 'Primary', group: 'Backend Development' },
      { name: 'Angular & TypeScript', expertise: 'Advanced', group: 'Frontend Development' },
      { name: 'JavaScript & Node.js', expertise: 'Advanced', group: 'Frontend Development' }
    ]
  },
  {
    name: 'Data Management',
    description: 'Database systems and data architecture',
    items: [
      { name: 'Data Modeling & Schema Design', expertise: 'Primary', group: 'Concepts & Practices' },
      { name: 'MongoDB & NoSQL', expertise: 'Primary', group: 'NoSQL Databases' },
      { name: 'PostgreSQL & PostGIS', expertise: 'Advanced', group: 'Relational Databases' },
      { name: 'MySQL & MariaDB', expertise: 'Basic', group: 'Relational Databases' }
    ]
  },
  {
    name: 'API Development',
    description: 'API design, documentation, and integration',
    items: [
      { name: 'OpenAPI Specification & API-First Approach', expertise: 'Primary', group: 'API Design' },
      { name: 'RESTful API Design', expertise: 'Primary', group: 'API Design' },
      { name: 'Postman', expertise: 'Advanced', group: 'Tools & Integration' },
      { name: 'OpenAPI Generator', expertise: 'Advanced', group: 'Tools & Integration' },
      { name: 'Swagger & API Documentation', expertise: 'Advanced', group: 'Tools & Integration' }
    ]
  },
  {
    name: 'AI Tools',
    description: 'AI integration and development acceleration',
    items: [
      { name: 'Spring AI & LLM Integration', expertise: 'Basic', group: 'AI Development' },
      { name: 'OpenAI & ChatGPT', expertise: 'Primary', group: 'AI Development' },
      { name: 'Windsurf IDE', expertise: 'Advanced', group: 'AI Development' },
      { name: 'GitHub Copilot', expertise: 'Advanced', group: 'AI Development' }
    ]
  },
  {
    name: 'Cloud, Platform & Infrastructure',
    description: 'Cloud services and deployment infrastructure',
    items: [
      { name: 'AWS & Spring Cloud', expertise: 'Primary', group: 'Cloud Services' },
      { name: 'Docker & Containerization', expertise: 'Advanced', group: 'Container Orchestration' },
      { name: 'Kubernetes', expertise: 'Advanced', group: 'Container Orchestration' },
      { name: 'Maven & NPM', expertise: 'Advanced', group: 'Build Tools' },
      { name: 'Git Version Control', expertise: 'Advanced', group: 'Build Tools' },
      { name: 'Atlassian Bitbucket', expertise: 'Advanced', group: 'Platform' },
      { name: 'Atlassian Jira', expertise: 'Advanced', group: 'Platform' },
      { name: 'Atlassian Confluence', expertise: 'Advanced', group: 'Platform' }
    ]
  },
  {
    name: 'Development Process',
    description: 'Software development methodologies and practices',
    items: [
      { name: 'Design Patterns', expertise: 'Primary', group: 'Softare Engineering Principles' },
      { name: 'Strategic Domain-Driven Design', expertise: 'Advanced', group: 'Softare Engineering Principles' },
      { name: 'Test-Driven Development', expertise: 'Advanced', group: 'Softare Engineering Principles' },
      { name: 'Scrum & Kanban', expertise: 'Advanced', group: 'Agile Methods' },
      { name: 'Mentorship and Pair Programming', expertise: 'Advanced', group: 'Softare Engineering Principles' },
      { name: 'Behavior-Driven Development', expertise: 'Basic', group: 'Agile Methods' },


    ]
  }
];

interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
}

const expertise: ExpertiseItem[] = [
  {
    title: 'Architecting',
    description: 'Scalable systems and micro-services with concepts like Domain-Driven Design & Bounded Contexts, creating modular architectures that grow with your business',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>`
  },
  {
    title: 'Designing',
    description: 'Secure, high-performance APIs with OpenAPI / API-first approach that are maintainable and secure',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>`
  },
  {
    title: 'Building',
    description: 'Robust backend services and tools with modern tools and languages like Java, Spring, Angular, TypeScript and JavaScript Frameworks like Nuxt.js, focusing on maintainability and clean code principles',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>`
  },
  {
    title: 'Driving',
    description: 'Technical improvements, documentation, and fostering cross-team collaboration, implementing best practices and mentoring teams',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>`
  },
  {
    title: 'Understanding',
    description: 'Backend, frontend, and AI technologies, supporting a holistic approach to web development',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>`
  },
  {
    title: 'Aligning',
    description: 'Solutions with business goals & AI strategy, ensuring technical decisions support long-term objectives',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>`
  }
]
</script>

<style scoped>
/* Similar to Angular's component styles */
section {
  scroll-margin-top: 4rem;
}
</style>
