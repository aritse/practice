import os

from keras.datasets import mnist
from keras.models import Sequential
from keras.layers import Conv2D, BatchNormalization, Activation, MaxPool2D, Flatten, Dense
from keras.utils import to_categorical
from keras.metrics import categorical_accuracy
from keras.utils import print_summary, plot_model
import matplotlib.pyplot as plt

(x_train, y_train), (x_test, y_test) = mnist.load_data()

x_train = x_train.reshape(x_train.shape[0], 28, 28, 1)
x_test = x_test.reshape(x_test.shape[0], 28, 28, 1)

x_train = x_train.astype('float32') / 255
x_test = x_test.astype('float32') / 255

y_train = to_categorical(y_train, 10, 'float32')
y_test = to_categorical(y_test, 10, 'float32')

model = Sequential()

model.add(Conv2D(6, (5, 5), strides=1, padding='same', input_shape=(28, 28, 1)))
model.add(BatchNormalization())
model.add(Activation('relu'))
model.add(MaxPool2D(pool_size=(2, 2), strides=2))
model.add(Conv2D(16, (5, 5), strides=1))
model.add(BatchNormalization())
model.add(Activation('relu'))
model.add(MaxPool2D(pool_size=(2, 2), strides=2))

model.add(Flatten())

model.add(Dense(units=120, activation='relu', input_dim=400))
model.add(Dense(units=84, activation='relu', input_dim=120))
model.add(Dense(units=10, activation='softmax', input_dim=84))
model.compile(loss='categorical_crossentropy',
              optimizer='Adam', metrics=['accuracy'])
history = model.fit(x_train, y_train, epochs=20, batch_size=32)

# Plot training accuracy values
os.environ['KMP_DUPLICATE_LIB_OK'] = 'True'

plt.plot(history.history['acc'])
plt.title('Model accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.legend(['Train'], loc='upper left')
plt.show()
plt.savefig('accuracy.png')

# Plot training loss values
plt.plot(history.history['loss'])
plt.title('Model loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['Train'], loc='upper left')
plt.show()
plt.savefig('loss.png')

print_summary(model)
plot_model(model, to_file='model.png')
