import torch
import netron
import os

def vis_model(path):
    addr, port = netron.start(path.lstrip('/'), browse=False)
    return str(addr) + ':' + str(port)