FROM python:3.10          
WORKDIR /app  
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1   
RUN pip install --upgrade pip   
COPY . /app 
RUN pip install -r requirements.txt
ENTRYPOINT ["python", "back_end/manage.py", "migrate"]
EXPOSE 8001
ENTRYPOINT ["python", "back_end/manage.py", "runserver"] 