import glfw
from OpenGL.GL import *


def drawLine(x1, y1, x2, y2, lineWidth):
  glLineWidth(lineWidth)
  glBegin(GL_LINES)
  glVertex2i(x1, y1)
  glVertex2i(x2, y2)
  glEnd()
  glFlush()