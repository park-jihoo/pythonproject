import sys
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QLineEdit
import pyautogui
import time


class Myapp(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        btn1 = QPushButton('클릭시작', self)
        btn1.clicked.connect(self.btn1click)

        self.x = QLineEdit(self)
        self.x.move(30, 40)
        self.y = QLineEdit(self)
        self.y.move(30, 100)
        self.z = QLineEdit(self)
        self.z.move(30, 160)

        self.setWindowTitle('PyQt Application')
        self.setGeometry(300, 300, 200, 200)
        self.show()

    def btn1click(self):
        for i in range(0, int(self.z.text())):
            if i % 100 == 0:
                print(i)
            pyautogui.click(int(self.x.text()), int(self.y.text()))
            time.sleep(0.01)


if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = Myapp()
    sys.exit(app.exec_())
