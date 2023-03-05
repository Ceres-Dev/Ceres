import glfw
from OpenGL.GL import *

def drawGui(win):
  width = glfw.get_window_size(win)[0]
  height = glfw.get_window_size(win)[1]
  
  glMatrixMode(GL_PROJECTION)
  glLoadIdentity()
  glOrtho(0, width, 0, height, -1, 1)
  glMatrixMode(GL_MODELVIEW)
  glLoadIdentity()
  glClearColor(0.19, 0.20, 0.24, 2)
  glClear(GL_COLOR_BUFFER_BIT)
  glFlush(); 