import glfw
from OpenGL.GL import *
from PIL import Image

from .gui.drawGui import drawGui

def createWindow(name):
  if not glfw.init():
    return

  win = glfw.create_window(1200, 700, name, None, None)

  if not win:
    glfw.terminate()
    print("Ceres could be started because the window could not be created")
    exit()

  with Image.open('icons/32x32px.ico') as img:
    glfw.set_window_icon(win, 1, img)
  
  glfw.set_window_pos(win, 100, 100)
  glfw.make_context_current(win)

  while not glfw.window_should_close(win):
    drawGui(win)
    glfw.poll_events()
    glfw.swap_buffers(win)


  glfw.terminate()