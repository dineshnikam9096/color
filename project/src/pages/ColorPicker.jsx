import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SketchPicker } from 'react-color'
import { useDropzone } from 'react-dropzone'

function ColorPicker() {
  const [selectedRoom, setSelectedRoom] = useState('livingRoom')
  const [selectedColor, setSelectedColor] = useState('#ffffff')
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isPickerVisible, setIsPickerVisible] = useState(false)

  const rooms = {
    livingRoom: 'Living Room',
    bedroom: 'Bedroom',
    kitchen: 'Kitchen',
    exterior: 'Exterior Walls'
  }

  const handleColorChange = (color) => {
    setSelectedColor(color.hex)
  }

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setUploadedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    }
  })

  // Sample room images for preview
  const roomImages = {
    livingRoom: 'https://images.unsplash.com/photo-1615529328331-f8917597711f',
    bedroom: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    kitchen: 'https://images.unsplash.com/photo-1556911220-bda9f33a8b1f',
    exterior: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  useEffect(() => {
    // Add a subtle animation to the color preview
    const interval = setInterval(() => {
      const hue = Math.floor(Math.random() * 360);
      document.documentElement.style.setProperty('--animation-color', `hsl(${hue}, 70%, 80%)`);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Virtual Color Picker
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Visualize different colors for your space
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Select Room</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(rooms).map(([key, label], index) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedRoom(key)}
                    className={`p-4 rounded-lg transition-colors ${
                      selectedRoom === key
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Upload Your Image</h2>
              <motion.div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300'
                }`}
                whileHover={{ scale: 1.02, borderColor: '#8b5cf6' }}
                animate={isDragActive ? { scale: 1.05, borderColor: '#8b5cf6' } : {}}
              >
                <input {...getInputProps()} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <div>
                      <motion.div
                        className="text-4xl mb-4 inline-block"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        📁
                      </motion.div>
                      <p>Drag & drop an image here, or click to select files</p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Choose Color</h2>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.button
                    onClick={() => setIsPickerVisible(!isPickerVisible)}
                    className="mb-4 px-6 py-3 bg-primary-600 text-white rounded-lg flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">
                      {isPickerVisible ? 'Hide Color Picker' : 'Show Color Picker'}
                    </span>
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white" 
                      style={{ backgroundColor: selectedColor }}
                    />
                  </motion.button>
                  
                  <AnimatePresence>
                    {isPickerVisible && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <SketchPicker
                          color={selectedColor}
                          onChange={handleColorChange}
                          disableAlpha
                          presetColors={[
                            '#D4ECDD', '#345B63', '#152D35', '#112031',
                            '#F9F9F9', '#F4F4F4', '#E8E8E8', '#DFDFDF',
                            '#F5EBE0', '#E3D5CA', '#D5BDAF', '#C8B6A6',
                            '#A4BE7B', '#5F8D4E', '#285430', '#1E3F20'
                          ]}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Preview</h2>
            <motion.div 
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRoom + selectedColor}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{
                    backgroundColor: selectedColor,
                    backgroundImage: `url(${uploadedImage || roomImages[selectedRoom]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply'
                  }}
                />
              </AnimatePresence>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-white text-lg">
                  {rooms[selectedRoom]} - {selectedColor.toUpperCase()}
                </p>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-xl font-bold mb-4">Selected Color Details</h3>
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-md"
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <p>
                  <strong>Hex Code:</strong> {selectedColor}
                </p>
                <motion.div 
                  className="mt-2 h-8 rounded" 
                  style={{ backgroundColor: selectedColor }}
                  whileHover={{ height: "40px" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="mt-4 grid grid-cols-5 gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[0.8, 0.6, 0.4, 0.2, 0].map((opacity, i) => (
                    <motion.div
                      key={i}
                      className="h-6 rounded"
                      style={{ 
                        backgroundColor: selectedColor,
                        opacity: 1 - opacity
                      }}
                      whileHover={{ height: "24px" }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker