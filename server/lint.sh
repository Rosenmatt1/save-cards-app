#!/bin/bash
poetry run black .
poetry run autoflake --in-place --recursive --remove-all-unused-imports --remove-duplicate-keys --remove-unused-variables .
poetry run flake8
poetry run pylama
poetry run isort -rc blog uplifty tests
poetry run bandit -r blog/ uplifty/

