FROM python:3.10-slim-bullseye

RUN apt-get update && apt-get install -y \
    curl;

RUN curl -sSL https://install.python-poetry.org | python - && \
    ln -s $HOME/.local/bin/poetry /usr/local/bin/poetry && \
    poetry config virtualenvs.create false

WORKDIR /srv/app

COPY pyproject.toml poetry.lock /srv/app/
RUN poetry install

COPY src src