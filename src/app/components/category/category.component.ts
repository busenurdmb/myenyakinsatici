import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { HttpClient } from '@angular/common/http';

import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: Category[] = [];
  currentCategory: Category | null;

  constructor(private categoryservice: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryservice.getCategorys().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
    console.log('c compo');
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'text-secondary ';
    } else {
      return 'text-primary ';
    }
  }
  getAllCategoryClass() {
    if (!this.currentCategory) {
      return 'text-secondary ';
    } else {
      return 'text-primary ';
    }
  }

  clearCurrentCategory() {
    this.currentCategory = null;
  }
}
