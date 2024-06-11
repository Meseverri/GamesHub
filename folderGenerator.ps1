
# Preguntar al usuario la dirección de la carpeta destino
$nombreCarpeta = Read-Host -Prompt 'Introduce la dirección de la carpeta destino'

# Preguntar al usuario el nombre de los archivos
$nombreArchivo = Read-Host -Prompt 'Introduce el nombre de los archivos'

# Crear la carpeta destino
New-Item -ItemType Directory -Force -Path $nombreCarpeta

# Crear el archivo .js en la carpeta destino
New-Item -ItemType File -Force -Path "$nombreCarpeta\$nombreArchivo.js"

# Crear el archivo .css en la carpeta destino
New-Item -ItemType File -Force -Path "$nombreCarpeta\$nombreArchivo.css"