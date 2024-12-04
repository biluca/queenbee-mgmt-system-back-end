from django.http import HttpResponse
import datetime

def index(request):
    html = f'''
    <html>
        <body>
            <h1>Hello from Vercel!</h1>
        </body>
    </html>
    '''
    return HttpResponse(html)