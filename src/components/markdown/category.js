export class Category {
  constructor(path, label, imgPath) {
    this.path = path
    this.label = label
    this.imgPath = imgPath
  }
}

export const Categorys = [
  // new Category('cv', 'CV', '../../cv.png'),
  new Category('java', 'Java', '../../java.png'),
  new Category('kotlin', 'Kotlin', '../../kotlin.png'),
  new Category('french', 'Français', '../../fr.png'),
  new Category('english', 'English', '../../uk.png'),
  new Category('japanese', '日本語', '../../ja.png'),
  new Category('chinese', '中文', '../../zh.png'),
  // new Category('spanish', 'Spanish', '../../es.png'),
  new Category('german', 'Deutsch', '../../de.png'),
  new Category(
    'book',
    'Book',
    'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f4da.png'
  ),
]
