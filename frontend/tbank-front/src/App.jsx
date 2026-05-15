import React, { useState, useEffect } from 'react'
import {
	Container,
	Typography,
	Button,
	Card,
	CardContent,
	Box,
	CircularProgress,
} from '@mui/material'
import ApiIcon from '@mui/icons-material/Api'
import axios from 'axios'

function App() {
	// Создаем переменные состояния
	const [data, setData] = useState(null) // Тут будут лежать данные от Django
	const [loading, setLoading] = useState(false) // Статус загрузки

	// Функция для запроса к Django
	const fetchDataFromDjango = async () => {
		setLoading(true)
		try {
			// Замените URL на ваш локальный адрес Django, когда запустите бэк
			const response = await axios.get('http://127.0.0.1:8000/api/hello/')
			setData(response.data)
		} catch (error) {
			console.error('Ошибка при запросе к бэку:', error)
			setData({ error: 'Не удалось достучаться до Django. Проверьте CORS!' })
		} finally {
			setLoading(false)
		}
	}

	return (
		<Container maxWidth='sm' style={{ marginTop: '50px' }}>
			<Box textAlign='center' marginBottom='30px'>
				<Typography variant='h4' component='h1' gutterBottom color='primary'>
					Хакатон fuck ВМК & Т-Банк
				</Typography>
				<Typography variant='subtitle1' color='textSecondary'>
					Готовый шаблон: React (Vite) + MUI
				</Typography>
			</Box>

			<Card
				variant='outlined'
				style={{ padding: '20px', borderRadius: '12px' }}
			>
				<CardContent>
					<Typography variant='h6' gutterBottom>
						Проверка связи с бэкендом
					</Typography>

					<Button
						variant='contained'
						color='secondary'
						startIcon={<ApiIcon />}
						onClick={fetchDataFromDjango}
						disabled={loading}
						fullWidth
					>
						{loading ? (
							<CircularProgress size={24} />
						) : (
							'Послать запрос на Django'
						)}
					</Button>

					<Box
						marginTop='20px'
						p={2}
						bgcolor='#f5f5f5'
						borderRadius='8px'
						style={{ minHeight: '60px' }}
					>
						<Typography variant='body2' color='textSecondary'>
							Ответ сервера:
						</Typography>
						<pre
							style={{ margin: 0, marginTop: '10px', whiteSpace: 'pre-wrap' }}
						>
							{data
								? JSON.stringify(data, null, 2)
								: 'Нажмите кнопку, чтобы проверить связь...'}
						</pre>
					</Box>
				</CardContent>
			</Card>
		</Container>
	)
}

export default App
