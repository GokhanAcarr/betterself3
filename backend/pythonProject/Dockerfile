FROM python:3.13-slim

RUN apt-get update && apt-get install -y \
    gcc \
    libmariadb-dev \
    build-essential \
    libssl-dev \
    libffi-dev \
    python3-dev \
    libxml2-dev \
    libxslt1-dev \
    pkg-config \
    && apt-get clean

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV MYSQLUSER=root
ENV MYSQLPASSWORD=wEjALybJnvRScHekxdHMysrARoKdBibJ
ENV MYSQLHOST=mysql.railway.internal
ENV MYSQLPORT=3306
ENV MYSQLDATABASE=exercisedb

EXPOSE 5000

CMD ["python", "wsgi.py"]
