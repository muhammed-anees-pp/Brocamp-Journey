from django.shortcuts import render
from django.shortcuts import redirect
from django.urls import reverse_lazy

# Redirect example
def redirect_to_book(request):
    return redirect('book_list')  # Assuming you have a URL pattern named 'book_list'

# Reverse lazy example
book_detail_url = reverse_lazy('book_detail', kwargs={'pk': 1})  # Resolves URL for a book with primary key 1
print(book_detail_url)
