# official python image
FROM python:3.9

# set the current working directory
WORKDIR /code

# copy requirements to the code directory
COPY ./requirements.txt /code/requirements.txt

# install the package requirements
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# copy the app direcotry inside the code directory
COPY ./app /code/app

# set the command to run the uvicorn server
CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
