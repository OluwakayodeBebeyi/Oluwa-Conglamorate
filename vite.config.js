import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        housing: 'housing.html',
        textiles: 'textiles.html',
        foods: 'foods.html',
        about: 'about.html',
        journal: 'journal.html',
        contact: 'contact.html'
      }
    }
  }
})
