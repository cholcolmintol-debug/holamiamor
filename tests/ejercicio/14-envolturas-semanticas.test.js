const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 14: Envolturas Semánticas HTML5', () => {
  const rootPath = path.join(__dirname, '../../');
  
  test('La carpeta docs/ejercicio-14 debe existir', () => {
    const docsPath = path.join(rootPath, 'docs/ejercicio-14');
    
    expect(fs.existsSync(docsPath)).toBe(true);
    
    const stats = fs.statSync(docsPath);
    expect(stats.isDirectory()).toBe(true);
  });

  describe('Archivo index.html', () => {
    test('El archivo docs/ejercicio-14/index.html debe existir', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');

      expect(fs.existsSync(indexPath)).toBe(true);
      
      const stats = fs.statSync(indexPath);
      expect(stats.isFile()).toBe(true);
    });

    test('index.html debe tener estructura HTML5 básica', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');
      expect(fs.existsSync(indexPath)).toBe(true);
      
      const content = fs.readFileSync(indexPath, 'utf8');
      
      expect(content).toMatch(/<!DOCTYPE\s+html>/i);
      expect(content).toMatch(/<html[^>]*>/i);
      expect(content).toMatch(/<head[^>]*>/i);
      expect(content).toMatch(/<\/head>/i);
      expect(content).toMatch(/<body[^>]*>/i);
      expect(content).toMatch(/<\/body>/i);
      expect(content).toMatch(/<\/html>/i);
    });

    test('index.html debe tener título', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');
      const content = fs.readFileSync(indexPath, 'utf8');
      expect(content).toMatch(/<title[^>]*>.*<\/title>/i);
    });

    test('index.html debe contener elemento header', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('header')).toBeTruthy();
    });

    test('index.html debe contener elemento nav', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('nav')).toBeTruthy();
    });

    test('index.html debe contener elemento main', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('main')).toBeTruthy();
    });

    test('index.html debe contener al menos 2 elementos section', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(2);
    });

    test('index.html debe contener elemento aside', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('aside')).toBeTruthy();
    });

    test('index.html debe contener elemento footer', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('footer')).toBeTruthy();
    });

    test('index.html debe contener enlaces de navegación a blog.html y empresa.html', () => {
      const indexPath = path.join(rootPath, 'docs', 'ejercicio-14', 'index.html');
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const navLinks = document.querySelectorAll('nav a');
      
      const hrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
      expect(hrefs.some(href => href && href.includes('blog.html'))).toBe(true);
      expect(hrefs.some(href => href && href.includes('empresa.html'))).toBe(true);
    });
  });

  describe('Archivo blog.html', () => {
    test('El archivo docs/ejercicio-14/blog.html debe existir', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');

      expect(fs.existsSync(blogPath)).toBe(true);
      
      const stats = fs.statSync(blogPath);
      expect(stats.isFile()).toBe(true);
    });

    test('blog.html debe tener estructura HTML5 básica', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      expect(fs.existsSync(blogPath)).toBe(true);
      
      const content = fs.readFileSync(blogPath, 'utf8');
      
      expect(content).toMatch(/<!DOCTYPE\s+html>/i);
      expect(content).toMatch(/<html[^>]*>/i);
      expect(content).toMatch(/<head[^>]*>/i);
      expect(content).toMatch(/<\/head>/i);
      expect(content).toMatch(/<body[^>]*>/i);
      expect(content).toMatch(/<\/body>/i);
      expect(content).toMatch(/<\/html>/i);
    });

    test('blog.html debe tener título', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      const content = fs.readFileSync(blogPath, 'utf8');
      expect(content).toMatch(/<title[^>]*>.*<\/title>/i);
    });

    test('blog.html debe contener elemento header', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      const content = fs.readFileSync(blogPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('header')).toBeTruthy();
    });

    test('blog.html debe contener elemento nav', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      const content = fs.readFileSync(blogPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('nav')).toBeTruthy();
    });

    test('blog.html debe contener elemento main', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      const content = fs.readFileSync(blogPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('main')).toBeTruthy();
    });

    test('blog.html debe contener al menos 2 elementos section', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      const content = fs.readFileSync(blogPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(2);
    });

    test('blog.html debe contener al menos 2 elementos article', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      const content = fs.readFileSync(blogPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const articles = document.querySelectorAll('article');
      expect(articles.length).toBeGreaterThanOrEqual(2);
    });

    test('blog.html debe contener elemento aside', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      const content = fs.readFileSync(blogPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('aside')).toBeTruthy();
    });

    test('blog.html debe contener elemento footer', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      const content = fs.readFileSync(blogPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('footer')).toBeTruthy();
    });

    test('blog.html debe contener enlaces de navegación a index.html y empresa.html', () => {
      const blogPath = path.join(rootPath, 'docs', 'ejercicio-14', 'blog.html');
      const content = fs.readFileSync(blogPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const navLinks = document.querySelectorAll('nav a');
      
      const hrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
      expect(hrefs.some(href => href && href.includes('index.html'))).toBe(true);
      expect(hrefs.some(href => href && href.includes('empresa.html'))).toBe(true);
      expect(navLinks.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Archivo empresa.html', () => {
    test('El archivo docs/ejercicio-14/empresa.html debe existir', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');

      expect(fs.existsSync(empresaPath)).toBe(true);
      
      const stats = fs.statSync(empresaPath);
      expect(stats.isFile()).toBe(true);
    });

    test('empresa.html debe tener estructura HTML5 básica', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');
      expect(fs.existsSync(empresaPath)).toBe(true);
      
      const content = fs.readFileSync(empresaPath, 'utf8');
      
      expect(content).toMatch(/<!DOCTYPE\s+html>/i);
      expect(content).toMatch(/<html[^>]*>/i);
      expect(content).toMatch(/<head[^>]*>/i);
      expect(content).toMatch(/<\/head>/i);
      expect(content).toMatch(/<body[^>]*>/i);
      expect(content).toMatch(/<\/body>/i);
      expect(content).toMatch(/<\/html>/i);
    });

    test('empresa.html debe tener título', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');
      const content = fs.readFileSync(empresaPath, 'utf8');
      expect(content).toMatch(/<title[^>]*>.*<\/title>/i);
    });

    test('empresa.html debe contener elemento header', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');
      const content = fs.readFileSync(empresaPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('header')).toBeTruthy();
    });

    test('empresa.html debe contener elemento nav', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');
      const content = fs.readFileSync(empresaPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('nav')).toBeTruthy();
    });

    test('empresa.html debe contener elemento main', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');
      const content = fs.readFileSync(empresaPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('main')).toBeTruthy();
    });

    test('empresa.html debe contener al menos 3 elementos section', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');
      const content = fs.readFileSync(empresaPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(3);
    });

    test('empresa.html debe contener elemento aside', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');
      const content = fs.readFileSync(empresaPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('aside')).toBeTruthy();
    });

    test('empresa.html debe contener elemento footer', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');
      const content = fs.readFileSync(empresaPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('footer')).toBeTruthy();
    });

    test('empresa.html debe contener enlaces de navegación a index.html y blog.html', () => {
      const empresaPath = path.join(rootPath, 'docs', 'ejercicio-14', 'empresa.html');
      const content = fs.readFileSync(empresaPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const navLinks = document.querySelectorAll('nav a');
      
      const hrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
      expect(hrefs.some(href => href && href.includes('index.html'))).toBe(true);
      expect(hrefs.some(href => href && href.includes('blog.html'))).toBe(true);
      expect(navLinks.length).toBeGreaterThanOrEqual(3);
    });
  });
});
